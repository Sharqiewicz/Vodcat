import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../storage/store';
import { Engine } from '../../engine';
import { Alcohol, Player, Turn } from '../../types';
import { addPoints } from '../../storage/playersSlice';
import ShotAlcohol from './ShotAlcohol';
import RoundResultsPage from './RoundResultsPage';
import { NormalLayout } from '../../layouts/NormalLayout';

import {
  Container,
  Button,
  ShotGlass,
  PlayerStats,
  PlayerName,
  PlayerPoints,
  PlayerStatsContainer,
  AlcoholContainer,
  Empty,
  DonePopup,
  DoneMessage,
  DonePoints,
  PointsMessage,
  ShotGlassContainer
} from './GamePage.styles';

function getScaleColor(points: number): string {
  if (points < 10) {
    return '#90be6d';
  }
  if (points < 18) {
    return '#f9c74f';
  }
  if (points < 24) {
    return '#f9844a';
  }
  if (points < 32) {
    return '#f3722c';
  }
  return '#f94144';
}

export default function DrinkPage() {
  const alcohols: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const game = useMemo(() => new Engine(players, alcohols), []);

  const dispatch = useDispatch();

  const [isFirstFreeDraw, setIsFirstFreeDraw] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const [isDrawed, setIsDrawed] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isNewRound, setIsNewRound] = useState(true);
  const [currentTurn, setCurrentTurn] = useState<Turn>(game.startGame());
  const [currentScaleColor, setCurrentScaleColor] = useState(getScaleColor(currentTurn.currentShot.points));
  const [nowPlayer, setNowPlayer] = useState(players.find((player) => player.id === currentTurn.currentPlayer.id));

  const handleGetRandomShot = (): void => {
    console.log('new Turn?');
    const newTurn = game.playTurn();
    setCurrentTurn(newTurn);
    setIsNewRound(newTurn.isNewRound);
    setNowPlayer(players.find((player) => player.id === newTurn.currentPlayer.id));
    setCurrentScaleColor(getScaleColor(newTurn.currentShot.points));
    setIsDrawed(false);
    setIsDone(false);
    setIsSkipped(false)
    setIsFirstFreeDraw(false)
  };

  const handleGetAnotherShot = (pointsMinus: number) => {

    setIsFirstFreeDraw(true)
    const newShot = game.getAnotherShot();
    setCurrentTurn({ ...currentTurn, currentShot: newShot });
    setCurrentScaleColor(getScaleColor(newShot.points));
    dispatch(addPoints({ id: currentTurn.currentPlayer.id, points: -pointsMinus }));
  };

  const handleDone = (): void => {
    setNowPlayer(players.find((player) => player.id === currentTurn.currentPlayer.id));

    const done = {
      id: currentTurn.currentPlayer.id,
      points: currentTurn.currentShot.points,
    };
    dispatch(addPoints(done));
    setIsDone(true);
  };

  const skipShot = () =>{
    setNowPlayer(players.find((player) => player.id === currentTurn.currentPlayer.id));
    dispatch(addPoints({
      id: currentTurn.currentPlayer.id,
      points: -6
    }));
    setIsSkipped(true)
    setIsDone(true);
  }

  console.log('isNewRound');
  console.log(isNewRound);
  return (
    <NormalLayout>
      <Container>
        {isNewRound ? (
          <RoundResultsPage setIsNewRound={setIsNewRound} />
        ) : (
          <>
            <PlayerStats>
              <PlayerStatsContainer>
                <PlayerName>{currentTurn.currentPlayer.name}</PlayerName>
                <PlayerPoints>
                  {isDone ? nowPlayer?.points || 0 + currentTurn.currentShot.points : nowPlayer?.points || 0}
                </PlayerPoints>
              </PlayerStatsContainer>
            </PlayerStats>
            {isDone ? (
              <DonePopup>
                {isSkipped ? <DoneMessage>You loser, you've disappointed me </DoneMessage> : <DoneMessage>
                  YOU HAVE DRUNK <DonePoints theme={currentScaleColor}>+ {currentTurn.currentShot.points}</DonePoints>{' '}
                  POINTS
                </DoneMessage>}
              </DonePopup>
            ) : (
              <ShotGlassContainer >
                <ShotGlass>
                <AlcoholContainer>
                  {isDrawed ? (
                    currentTurn.currentShot.proportions.map((proportion, index) => (
                      <ShotAlcohol
                        proportion={proportion}
                        alcohol={currentTurn.currentShot.alcohol[index].name}
                        color={currentTurn.currentShot.alcohol[index].color}
                      />
                    ))
                  ) : (
                    <Empty />
                  )}
                </AlcoholContainer>
              </ShotGlass>
              </ShotGlassContainer>
            )}
            {isDrawed ? (
              isDone ? (
                <Button onClick={handleGetRandomShot}>NEXT PLAYER</Button>
              ) : (
                <>
                  <PointsMessage>
                    Shot points: <DonePoints theme={currentScaleColor}>+ {currentTurn.currentShot.points}</DonePoints>
                  </PointsMessage>
                  <Button onClick={handleDone}>DONE</Button>
                  {isFirstFreeDraw ? (
                    <Button onClick={() => handleGetAnotherShot(2)}>DRAW ANOTHER (-2POINTS)</Button>
                  ): <Button onClick={() => handleGetAnotherShot(0)}>DRAW ANOTHER (-0 POINTS - FIRST TRY)</Button>}
                  <Button onClick={skipShot}>SKIP (-6POINTS)</Button>
                </>
              )
            ) : (
              <Button onClick={() => setIsDrawed(true)}>Draw a shot!</Button>
            )}
          </>
        )}
      </Container>
    </NormalLayout>
  );
}

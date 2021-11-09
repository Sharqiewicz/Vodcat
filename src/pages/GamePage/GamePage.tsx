import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
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
  const game = useMemo(() => new Engine(players, alcohols), []);

  const dispatch = useDispatch();

  const [isDrawed, setIsDrawed] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [currentTurn, setCurrentTurn] = useState<Turn>(game.startGame());
  const [currentScaleColor, setCurrentScaleColor] = useState(getScaleColor(currentTurn.currentShot.points));
  const [nowPlayer, setNowPlayer] = useState(players.find((player) => player.id === currentTurn.currentPlayer.id));

  const handleGetRandomShot = (): void => {
    console.log('new Turn?');
    const newTurn = game.playTurn();
    setCurrentTurn(newTurn);
    setNowPlayer(players.find((player) => player.id === newTurn.currentPlayer.id));
    setCurrentScaleColor(getScaleColor(newTurn.currentShot.points));
    setIsDrawed(false);
    setIsDone(false);
  };

  const handleGetAnotherShot = () => {
    const newShot = game.getAnotherShot();
    setCurrentTurn({ ...currentTurn, currentShot: newShot });
    setCurrentScaleColor(getScaleColor(newShot.points));
    dispatch(addPoints({ id: currentTurn.currentPlayer.id, points: -2 }));
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

  return (
    <NormalLayout>
      <Container>
        {game.isNewRound ? (
          <RoundResultsPage />
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
                <DoneMessage>
                  YOU HAVE DRUNK <DonePoints theme={currentScaleColor}>+ {currentTurn.currentShot.points}</DonePoints>{' '}
                  POINTS
                </DoneMessage>
              </DonePopup>
            ) : (
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
            )}
            {isDrawed ? (
              isDone ? (
                <Button onClick={handleGetRandomShot}>NEXT PLAYER</Button>
              ) : (
                <>
                  <Button onClick={handleDone}>DONE</Button>
                  <Button onClick={handleGetAnotherShot}>DRAW ANOTHER (-2POINTS)</Button>
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

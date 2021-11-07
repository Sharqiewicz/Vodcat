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

  const handleGetRandomShot = (): void => {
    console.log('new Turn?');
    const newTurn = game.playTurn();
    console.log(newTurn);
    setCurrentTurn(newTurn);
    setCurrentScaleColor(getScaleColor(newTurn.currentShot.points));
    setIsDrawed(false);
    setIsDone(false);
  };

  const handleDone = (): void => {
    const done = {
      id: currentTurn.currentPlayer.id,
      points: currentTurn.currentPlayer.points + currentTurn.currentShot.points,
    };
    dispatch(addPoints(done));
    setIsDone(true);
  };

  console.log('currentTurn');
  console.log(currentTurn);
  console.log('game now', game);

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
                  {isDone
                    ? currentTurn.currentPlayer.points + currentTurn.currentShot.points
                    : currentTurn.currentPlayer.points}
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
                <Button onClick={handleGetRandomShot}>DONE</Button>
              ) : (
                <Button onClick={handleDone}>NEXT PLAYER</Button>
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

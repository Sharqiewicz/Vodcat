import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Engine } from '../../engine';
import { Alcohol, Player, Turn } from '../../types';
import { addPoints } from '../../storage/playersSlice';
import ShotAlcohol from './ShotAlcohol';

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

export const useGame = (): [Engine, any] => {
  const alcohols: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
  const players: Player[] = useSelector((state: RootState) => state.players.list);
  const game: Engine = useMemo(() => new Engine(players, alcohols), []);

  const dispatch = useDispatch();

  const [isDrawed, setIsDrawed] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [currentTurn, setCurrentTurn] = useState<Turn>(game.startGame());
  const [currentScaleColor, setCurrentScaleColor] = useState(getScaleColor(currentTurn.currentShot.points));

  const handleGetRandomShot = (): void => {
    const newTurn = game.playTurn();
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

  const turn = {
    isDrawed,
    isDone,
    currentScaleColor,
    handleDone,
    handleGetRandomShot,
  };

  return [game, turn];
};

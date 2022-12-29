import { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../storage/store';
import { Engine } from '../../../../engine';
import { Alcohol, Player, Turn, Shot } from '../../../../types';
import { addPoints, addShotToCache , clearShot} from '../../../../storage/playersSlice';

import { PointsCenter } from './components/PointsCenter'
import { ShotCenter } from './components/ShotCenter'
import { PlayerStatsCenter } from './components/PlayerStatsCenter'
import { ButtonsCenter } from './components/ButtonsCenter'

import { POINTS_FOR_GIVING_DRINK_TO_ANOTHER_PLAYER, POINTS_FOR_GIVING_UP, DEFAULT_RELOAD_SHOTS } from '../../utils/consts'
import { PopupsCenter } from './components/PopupsCenter';

import {
  CenterContainer
} from '../../GamePage.styles';

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

export const GameCenter = (props: any) => {

    const alcohols: Alcohol[] = useSelector((state: RootState) => state.alcohol.items);
    const players: Player[] = useSelector((state: RootState) => state.players.list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const game = useMemo(() => new Engine(players, alcohols), []);

    const dispatch = useDispatch();

    const [reloadedShots, setReloadedShots] = useState(DEFAULT_RELOAD_SHOTS);
    const [bonusShotDone, setBonusShotDone] = useState<boolean>(false);
    const [bonusShot, setBonusShot] = useState<Shot>();
    const [isGiveShotToAnotherPlayer, setIsGiveShotToAnotherPlayer] = useState(false);
    const [wasShotGiven, setWasShotGiven] = useState(false);
    const [isFirstFreeShowDrawn, setIsFirstFreeShowDrawn] = useState(false);
    const [isShotSkipped, setIsShotSkipped] = useState(false);
    const [isShotDrawn, setisShotDrawn] = useState(false);
    const [isTurnDone, setisTurnDone] = useState(false);
    const [currentTurn, setCurrentTurn] = useState<Turn>(game.startGame());
    const [currentScaleColor, setCurrentScaleColor] = useState(getScaleColor(currentTurn.currentShot.points || bonusShot?.points || 0));
    // const [nowPlayer, setNowPlayer] = useState(players.find((player) => player.id === currentTurn.currentPlayer.id));

    const resetGameVariables = () => {
        console.log('reset game variables')
      setisShotDrawn(false);
      setisTurnDone(false);
      setIsShotSkipped(false)
      setIsGiveShotToAnotherPlayer(false)
      setIsFirstFreeShowDrawn(false)
      setWasShotGiven(false)
      setBonusShotDone(false)
      setBonusShot(undefined)
      setReloadedShots(DEFAULT_RELOAD_SHOTS)
    }

    const handleGetRandomShot = (): void => {
      const newTurn = game.playTurn();
      resetGameVariables()
      setCurrentTurn(newTurn);
      props.setIsNewRound(newTurn.isNewRound);
      const player = players.find((player) => player.id === newTurn.currentPlayer.id)
      setCurrentScaleColor(getScaleColor(newTurn.currentShot.points));

      if(!newTurn.isNewRound && player?.shotCache.length){
        console.log('player')
        console.log(player)
        console.log('player.shotCache')
        console.log(player?.shotCache);
        console.log('player.shotCache[0]');
        console.log(player.shotCache[0]);
        setBonusShot(player.shotCache[0] as Shot)
        dispatch(clearShot({ id: player.id}))
      }
    };


    useEffect(()=>{
        if(!currentTurn.isNewRound && currentTurn.currentPlayer?.shotCache.length){
            console.log('currentTurn.currentPlayer')
            console.log(currentTurn.currentPlayer)
            console.log('currentTurn.currentPlayer.shotCache')
            console.log(currentTurn.currentPlayer?.shotCache);
            console.log('currentTurn.currentPlayer.shotCache[0]');
            console.log(currentTurn.currentPlayer.shotCache[0]);
            setBonusShot(currentTurn.currentPlayer.shotCache[0] as Shot)
            dispatch(clearShot({ id: currentTurn.currentPlayer.id}))
          }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ currentTurn.isNewRound])

    const handleGetAnotherShot = (pointsMinus: number) => {

      setIsFirstFreeShowDrawn(true)

      const newShot = game.getAnotherShot();
      setCurrentTurn({ ...currentTurn, currentShot: newShot });
      setCurrentScaleColor(getScaleColor(newShot.points));

      setReloadedShots(state => state + 1)

      dispatch(addPoints({ id: currentTurn.currentPlayer.id, points: -pointsMinus }));
    };

    const handleTurnDone = (): void => {
      const done = {
        id: currentTurn.currentPlayer.id,
        points: currentTurn.currentShot.points,
      };
      dispatch(addPoints(done));
      setisTurnDone(true);
    };

    const skipShot = () =>{
      dispatch(addPoints({
        id: currentTurn.currentPlayer.id,
        points: POINTS_FOR_GIVING_UP
      }));
      setIsShotSkipped(true);
      setisTurnDone(true);
    }

    const drinkBonusShot = () => {
      const done = {
        id: currentTurn.currentPlayer.id,
        points: bonusShot!.points,
      };
      dispatch(addPoints(done));
      setBonusShotDone(true)
    }

    const giveShot = (playerId: string) => {
      const done = {
        id: currentTurn.currentPlayer.id,
        points: POINTS_FOR_GIVING_DRINK_TO_ANOTHER_PLAYER,
      };
      dispatch(addPoints(done));

      const currentShot = currentTurn.currentShot;
      dispatch(addShotToCache({id: playerId, shot: currentShot}));
      setIsGiveShotToAnotherPlayer(false);
      setWasShotGiven(true);
      setisTurnDone(true);
    }


    const giveShotToAnotherPlayer = (value: boolean) => {
        setIsGiveShotToAnotherPlayer(value)
    }

    const renderGame = () => {
        return (
            <>
                <ShotCenter {...{ bonusShot, currentTurnShot: currentTurn.currentShot, isShotDrawn, bonusShotDone }} />
                <PointsCenter {...{ bonusShot, currentTurnShot: currentTurn.currentShot, bonusShotDone, currentScaleColor, isShotDrawn }} />
            </>
        )
    }


    return (
        <>
            <PlayerStatsCenter {...{ wasShotGiven, bonusShot, currentTurnShot: currentTurn.currentShot, currentTurnPlayer: currentTurn.currentPlayer, isTurnDone, reloadedShots }}  />
            <CenterContainer>
              { isTurnDone ? <PopupsCenter {...{currentScaleColor, currentShotTurn: currentTurn.currentShot, isShotSkipped, wasShotGiven, bonusShot }}/> : renderGame() }
              <ButtonsCenter {...{ bonusShotDone, setisShotDrawn, currentTurnPlayer: currentTurn.currentPlayer, currentTurnShot: currentTurn.currentShot, drinkBonusShot, giveShot, giveShotToAnotherPlayer, handleGetAnotherShot, handleGetRandomShot, handleTurnDone, isFirstFreeShowDrawn, isGiveShotToAnotherPlayer, isShotDrawn, isTurnDone, players, reloadedShots, skipShot, bonusShot,  }}  />
            </CenterContainer>
        </>
    )
}
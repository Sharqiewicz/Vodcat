import { useMemo, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../storage/store';
import { Engine } from '../../../../engine';
import { Player, Turn, Shot, Game } from '../../../../types';
import { addPoints } from '../../../../storage/playersSlice';

import { PointsCenter } from './components/PointsCenter';
import { ShotCenter } from './components/ShotCenter';
import { PlayerStatsCenter } from './components/PlayerStatsCenter';
import { ButtonsCenter } from './components/ButtonsCenter';
import { PopupsCenter } from './components/PopupsCenter';

import { POINTS_FOR_GIVING_UP } from '../../utils/consts';
import RoulettePage from '../../../RoulettePage';
import { getScaleColor } from './helpers';

enum State {
  Initializing,
  PlayingTurn,
  TurnDone,
  Ended,
}

enum Event {
  Initialize,
  ShotIsPrepared,
  TurnDone,
  SkipShot,
  ResetTurn,
}

type StateSchema = {
  state: State;
  isShotSkipped: boolean;
  currentTurn?: Turn;
};

type Action = {
  type: Event;
  payload?: any;
};

const initialState: StateSchema = {
  state: State.Initializing,
  currentTurn: undefined,
  isShotSkipped: false,
};

// Manage to show proper UI for Engine state
const reducer = (state: StateSchema, action: Action): StateSchema => {
  switch (state.state) {
    case State.Initializing:
      if (action.type === Event.Initialize) {
        return { ...state, state: State.PlayingTurn, currentTurn: action.payload };
      }
      break;
    case State.PlayingTurn:
      if (action.type === Event.ShotIsPrepared) {
        return {
          ...state,
          state: State.PlayingTurn,
          currentTurn: { ...(state.currentTurn as Turn), currentShot: action.payload },
        };
      }
      if (action.type === Event.SkipShot) {
        return { ...state, state: State.TurnDone, isShotSkipped: true };
      }
      if (action.type === Event.TurnDone) {
        return { ...state, state: State.TurnDone };
      }
      break;
    case State.TurnDone:
      if (action.type === Event.ResetTurn) {
        return initialState;
      }
      break;
    default:
      return state;
  }
  return state;
};

export const GameCenter = (props: any) => {
  // ARE YOU SURE YOU WANT TO LEAVE POPUP
  useEffect(() => {
    window.onbeforeunload = function () {
      return true;
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const players: Player[] = useSelector((state: RootState) => state.players.list);

  const game = useMemo(() => new Engine() as unknown as Game, []);

  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localDispatch({ type: Event.Initialize, payload: game.startGame(players) });
  }, []);

  const resetTurnVariables = () => {
    localDispatch({ type: Event.ResetTurn });
  };

  const handleEndTurn = () => {
    resetTurnVariables();
    localDispatch({ type: Event.ResetTurn });
    const newTurn = game.playTurn(players);
    props.setIsNewRound(newTurn.isNewRound);
    localDispatch({ type: Event.Initialize, payload: newTurn });
  };

  const handleTurnDone = (): void => {
    if (!state.currentTurn) return;
    if (!state.currentTurn?.currentShot) return;

    const turnSummary = {
      id: state.currentTurn.currentPlayer.id,
      points: state.currentTurn.currentShot.points,
    };

    dispatch(addPoints(turnSummary));
    localDispatch({ type: Event.TurnDone });
  };

  const skipShot = () => {
    if (!state.currentTurn) return;
    if (!state.currentTurn?.currentShot) return;

    dispatch(
      addPoints({
        id: state.currentTurn.currentPlayer.id,
        points: POINTS_FOR_GIVING_UP,
      })
    );

    localDispatch({ type: Event.SkipShot });
  };

  console.log(state);

  const renderShotNotPrepared = () =>
    !state.currentTurn?.currentShot && (
      <RoulettePage
        game={game}
        setIsShotPrepared={(payload: Shot) => localDispatch({ type: Event.ShotIsPrepared, payload })}
      />
    );

  const renderShotIsPrepared = () =>
    state.currentTurn?.currentShot && (
      <>
        <ShotCenter {...{ currentTurnShot: state.currentTurn?.currentShot }} />
        <PointsCenter {...{ currentTurnShot: state.currentTurn?.currentShot, currentScaleColor: 'red' }} />
      </>
    );

  const renderTurnIsDone = () =>
    state.state === State.TurnDone && (
      <PopupsCenter
        {...{
          currentScaleColor: 'red',
          currentShotTurn: state.currentTurn?.currentShot,
          isShotSkipped: state.isShotSkipped,
        }}
      />
    );

  const renderButtonsCenter = () =>
    state.currentTurn?.currentShot && (
      <ButtonsCenter
        {...{
          handleTurnDone,
          handleEndTurn,
          skipShot,
          isTurnDone: state.state === State.TurnDone,
        }}
      />
    );

  return (
    <main>
      <PlayerStatsCenter
        {...{
          currentTurnShot: state.currentTurn?.currentShot,
          currentTurnPlayer: state.currentTurn?.currentPlayer,
          isTurnDone: state.state === State.TurnDone,
        }}
      />
      {renderShotNotPrepared()}
      {renderShotIsPrepared()}
      {renderTurnIsDone()}
      {renderButtonsCenter()}
    </main>
  );
};

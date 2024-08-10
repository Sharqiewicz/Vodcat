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
import { GameElementsContainer, Main, Sidebar } from '../../GamePage.styles';
import BonusRoulettePage from '../BonusRoulettePage';
import { Bonus, getUnifiedBonusObject } from '../BonusRoulettePage/bonuses';
import { IncreaseChanceForAlcoholEveryone } from './components/IncreaseChanceForAlcoholEveryone';
import { ChangeAlcohol } from './components/ChangeAlcohol';
import { StealPoints } from './components/StealPoints';

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
  StartBonusWheel,
  EndBonusWheel,
  IncreaseChanceForAlcoholEveryone,
  ChangeAlcohol,
  DoublePoints,
  StealPoints,
  ResetBonusWheel,
}

type StateSchema = {
  state: State;
  isShotSkipped: boolean;
  currentTurn?: Turn & { currentScaleColor: string };
  isBonusWheelActive: boolean;
  isIncreaseChanceForAlcoholEveryone: boolean;
  isChangeAlcohol: boolean;
  isStealPoints: boolean;
  isShotSkippedWithPoints: boolean;
  isBonusWheelUsed: boolean;
  ResetBonusWheel: boolean;
};

type Action = {
  type: Event;
  payload?: any;
};

const initialState: StateSchema = {
  state: State.Initializing,
  currentTurn: undefined,
  isShotSkipped: false,
  isBonusWheelActive: false,
  isIncreaseChanceForAlcoholEveryone: false,
  isChangeAlcohol: false,
  isStealPoints: false,
  isBonusWheelUsed: false,
  isShotSkippedWithPoints: false,
  ResetBonusWheel: false,
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
          currentTurn: {
            ...(state.currentTurn as Turn),
            currentShot: action.payload,
            currentScaleColor: getScaleColor(action.payload.points),
          },
          isChangeAlcohol: false,
        };
      }

      if (action.type === Event.StartBonusWheel) {
        return {
          ...state,
          isBonusWheelActive: true,
        };
      }

      if (action.type === Event.IncreaseChanceForAlcoholEveryone) {
        return {
          ...state,
          isBonusWheelActive: false,
          isIncreaseChanceForAlcoholEveryone: true,
          isChangeAlcohol: false,
          isStealPoints: false,
        };
      }

      if (action.type === Event.ChangeAlcohol) {
        return {
          ...state,
          isBonusWheelActive: false,
          isIncreaseChanceForAlcoholEveryone: false,
          isChangeAlcohol: true,
          isStealPoints: false,
        };
      }

      if (action.type === Event.StealPoints) {
        return {
          ...state,
          isBonusWheelActive: false,
          isIncreaseChanceForAlcoholEveryone: false,
          isChangeAlcohol: false,
          isStealPoints: true,
        };
      }

      if (action.type === Event.DoublePoints) {
        return {
          ...state,
          currentTurn: {
            ...state.currentTurn,
            //@ts-ignore
            currentShot: {
              ...state.currentTurn!.currentShot,
              points: state.currentTurn!.currentShot!.points * 2,
            },
          },
          isBonusWheelActive: false,
          isIncreaseChanceForAlcoholEveryone: false,
          isStealPoints: false,
          isBonusWheelUsed: true,
          isChangeAlcohol: false,
        };
      }

      if (action.type === Event.ResetBonusWheel) {
        return {
          ...state,
          isBonusWheelUsed: false,
          isIncreaseChanceForAlcoholEveryone: false,
          isChangeAlcohol: false,
          isStealPoints: false,
          isBonusWheelActive: true,
        };
      }

      if (action.type === Event.EndBonusWheel) {
        return {
          ...state,
          isBonusWheelActive: false,
          isIncreaseChanceForAlcoholEveryone: false,
          isChangeAlcohol: false,
          isStealPoints: false,
          isBonusWheelUsed: true,
        };
      }

      if (action.type === Event.SkipShot) {
        return { ...state, state: State.TurnDone, isShotSkipped: true };
      }
      if (action.type === Event.TurnDone) {
        return { ...state, state: State.TurnDone, isShotSkippedWithPoints: action.payload };
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
    // IT HAS TO START ONLY ONCE
    localDispatch({ type: Event.Initialize, payload: game.startGame(players) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const startBonusWheel = () => {
    localDispatch({ type: Event.StartBonusWheel });
  };

  const endBonusWheel = (bonus: Bonus) => {
    // Calculate bonus

    const unifiedBonus = getUnifiedBonusObject(bonus);

    if (unifiedBonus.points) {
      dispatch(
        addPoints({
          id: state.currentTurn!.currentPlayer.id,
          points: unifiedBonus.points,
        })
      );
      endBonusEffects();
    } else if (unifiedBonus.increaseChanceForAlcoholEveryone) {
      localDispatch({ type: Event.IncreaseChanceForAlcoholEveryone }); // Show a screen where you choose an alcohol
    } else if (unifiedBonus.doublePoints) {
      localDispatch({ type: Event.DoublePoints });
      endBonusEffects();
    } else if (unifiedBonus.stealPoints) {
      localDispatch({ type: Event.StealPoints });
    } else if (unifiedBonus.skipPlusPoints) {
      dispatch(
        addPoints({
          id: state.currentTurn!.currentPlayer.id,
          points: 15,
        })
      );
      endBonusEffects();
      localDispatch({ type: Event.TurnDone, payload: true });
    } else if (unifiedBonus.changeAlcohol) {
      localDispatch({ type: Event.ChangeAlcohol });
    } else if (unifiedBonus.isDecreaseOtherPlayersPoints) {
      players
        .filter((player) => player.id !== state.currentTurn?.currentPlayer.id)
        .forEach((player) => {
          dispatch(addPoints({ id: player.id, points: -5 }));
        });
    }
  };

  const resetBonusWheel = () => {
    dispatch(addPoints({ id: state.currentTurn!.currentPlayer.id, points: -15 }));
    localDispatch({ type: Event.ResetBonusWheel });
  };

  const endBonusEffects = () => {
    localDispatch({ type: Event.EndBonusWheel });
  };

  const updateCurrentShot = (newShot: Shot) => {
    localDispatch({ type: Event.ShotIsPrepared, payload: newShot });
  };

  const renderShotNotPrepared = () =>
    !state.currentTurn?.currentShot && (
      <RoulettePage
        game={game}
        setIsShotPrepared={(payload: Shot) => localDispatch({ type: Event.ShotIsPrepared, payload })}
      />
    );

  const renderShotIsPrepared = () =>
    state.currentTurn?.currentShot &&
    !state.isBonusWheelActive &&
    !state.isIncreaseChanceForAlcoholEveryone &&
    !state.isChangeAlcohol &&
    !state.isStealPoints && (
      <>
        <ShotCenter {...{ currentTurnShot: state.currentTurn?.currentShot }} />
        <PointsCenter
          {...{
            currentTurnShot: state.currentTurn?.currentShot,
            currentScaleColor: state.currentTurn.currentScaleColor,
          }}
        />
      </>
    );

  const renderTurnIsDone = () =>
    state.state === State.TurnDone && (
      <PopupsCenter
        {...{
          handleEndTurn,
          currentScaleColor: state.currentTurn?.currentScaleColor,
          currentShotTurn: state.currentTurn?.currentShot,
          isShotSkipped: state.isShotSkipped,
          isShotSkippedWithPoints: state.isShotSkippedWithPoints,
        }}
      />
    );

  const renderButtonsCenter = () =>
    state.currentTurn?.currentShot &&
    !state.isBonusWheelActive &&
    !state.isIncreaseChanceForAlcoholEveryone &&
    !state.isChangeAlcohol &&
    !state.isStealPoints && (
      <ButtonsCenter
        {...{
          skipShot,
          resetBonusWheel,
          isBonusWheelUsed: state.isBonusWheelUsed,
          handleTurnDone,
          startBonusWheel,
          isTurnDone: state.state === State.TurnDone,
          isBonusWheelActive: state.isBonusWheelActive,
        }}
      />
    );

  const renderBonusWheel = () =>
    state.state === State.PlayingTurn &&
    state.isBonusWheelActive &&
    !state.isIncreaseChanceForAlcoholEveryone &&
    !state.isChangeAlcohol &&
    !state.isStealPoints && <BonusRoulettePage game={game} endBonusWheel={endBonusWheel} />;

  const renderIncreaseChanceForAlcoholEveryone = () =>
    state.isIncreaseChanceForAlcoholEveryone && <IncreaseChanceForAlcoholEveryone endBonusEffects={endBonusEffects} />;

  const renderChangeAlcohol = () =>
    state.isChangeAlcohol && (
      <ChangeAlcohol
        endBonusEffects={endBonusEffects}
        currentShot={state.currentTurn?.currentShot!}
        updateCurrentShot={updateCurrentShot}
        game={game}
      />
    );

  const renderStealPoints = () =>
    state.isStealPoints && (
      <StealPoints endBonusEffects={endBonusEffects} currentPlayer={state.currentTurn!.currentPlayer} />
    );

  return (
    <Main>
      <Sidebar>
        <PlayerStatsCenter
          {...{
            currentTurnShot: state.currentTurn?.currentShot,
            currentTurnPlayer: players.find((player) => player.id === state.currentTurn?.currentPlayer.id),
            isTurnDone: state.state === State.TurnDone,
          }}
        />
        {renderButtonsCenter()}
      </Sidebar>
      <GameElementsContainer>
        {renderShotNotPrepared()}
        {renderShotIsPrepared()}
        {renderBonusWheel()}
        {renderIncreaseChanceForAlcoholEveryone()}
        {renderChangeAlcohol()}
        {renderStealPoints()}
        {renderTurnIsDone()}
      </GameElementsContainer>
    </Main>
  );
};

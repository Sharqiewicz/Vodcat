import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storage/store';
import { Alcohol, Player } from '../types';
import { getUniqueID } from '../utils';

const defaultState: Player[] = [
  {
    name: 'Dominik',
    points: 0,
    id: '78928242',
    banned: [],
  },
  {
    name: 'Kacper S',
    points: 0,
    id: '78928245',
    banned: [],
  },
  {
    name: 'Kacper B',
    points: 0,
    id: '73232332',
    banned: [],
  },
  {
    name: 'Maksym',
    points: 0,
    id: '73232338',
    banned: [],
  },
  {
    name: 'Szymon',
    points: 0,
    id: '78928949',
    banned: [],
  },
];

export interface PlayersState {
  list: Player[];
}

const initialState: PlayersState = {
  list: defaultState,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action: { payload: string }) => {
      state.list.push({ name: action.payload, points: 0, id: getUniqueID(), banned: [] });
    },
    addPoints: (state, action: { payload: { id: string; points: number } }) => {
      console.log('add points to player', action.payload.id, action.payload.points);
      state.list = state.list.map((player) =>
        player.id === action.payload.id ? { ...player, points: player.points + action.payload.points } : player
      );
    },
    removePlayer: (state, action: { payload: string }) => {
      state.list = state.list.filter((player) => player.id !== action.payload);
    },
    addShotToCache: (state, action: { payload: { id: string; banned: Alcohol } }) => {
      state.list = state.list.map((player) =>
        player.id === action.payload.id ? { ...player, banned: [action.payload.banned] } : player
      );
    },
    clearShot: (state, action: { payload: { id: string } }) => {
      state.list = state.list.map((player) => (player.id === action.payload.id ? { ...player, banned: [] } : player));
    },
  },
});

export const { addPlayer, removePlayer, addPoints, addShotToCache, clearShot } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.list;

export default playersSlice.reducer;

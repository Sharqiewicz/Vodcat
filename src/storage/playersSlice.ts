import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Player } from '../types';
import { getUniqueID } from '../utils';

const defaultState: Player[] = [
  {
    name: 'Kacper',
    points: 0,
    id: '78928242',
  },
  {
    name: 'Gosia',
    points: 0,
    id: 'dsakj2234',
  },
  {
    name: 'Paulina',
    points: 0,
    id: 'diwooss22',
  },
  {
    name: 'Julia',
    points: 0,
    id: '3772-ss',
  },
  {
    name: 'Ola',
    points: 0,
    id: 'peoijgq',
  },
  {
    name: 'Julia',
    points: 0,
    id: '938278-ddda',
  },
  {
    name: 'Eliza',
    points: 0,
    id: 'jdgskowwwjfu',
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
      state.list.push({ name: action.payload, points: 0, id: getUniqueID() });
    },
    addPoints: (state, action: { payload: { id: string; points: number } }) => {
      state.list = state.list.map((player) =>
        player.id === action.payload.id ? { ...player, points: player.points + action.payload.points } : player
      );
    },
    removePlayer: (state, action: { payload: string }) => {
      console.log('action', action);
      state.list = state.list.filter((player) => player.id !== action.payload);
    },
  },
});

export const { addPlayer, removePlayer, addPoints } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.list;

export default playersSlice.reducer;

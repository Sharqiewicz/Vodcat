import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storage/store';
import { Player, Shot } from '../types';
import { getUniqueID } from '../utils';

const defaultState: Player[] = [
  {
    name: 'Stefan',
    points: 0,
    id: '78928242',
    shotCache: []
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
      state.list.push({ name: action.payload, points: 0, id: getUniqueID(), shotCache: [] });
    },
    addPoints: (state, action: { payload: { id: string; points: number } }) => {
      state.list = state.list.map((player) =>
        player.id === action.payload.id ? { ...player, points: player.points + action.payload.points } : player
      );
    },
    removePlayer: (state, action: { payload: string }) => {
      state.list = state.list.filter((player) => player.id !== action.payload);
    },
    addShotToCache: (state, action: { payload: { id: string, shot: Shot}}) => {

      state.list = state.list.map((player) => player.id === action.payload.id ? { ...player, shotCache: [action.payload.shot] } : player
      );
    },
    clearShot: (state, action: { payload: { id: string}}) => {
      state.list = state.list.map((player) =>
        player.id === action.payload.id ? { ...player, shotCache: [] } : player
      );
    }
  },
});

export const { addPlayer, removePlayer, addPoints, addShotToCache, clearShot } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.list;


export default playersSlice.reducer;

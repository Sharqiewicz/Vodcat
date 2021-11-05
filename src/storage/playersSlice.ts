import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {Player} from '../types'


const defaultState: Player[] = []

export interface PlayersState {
  list: Player[];
}

const initialState: PlayersState = {
  list: defaultState
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action : any) => {
      state.list.push(action.payload);
    },
    removePlayer: (state, action:any) => {
      state.list.filter( player => player.id !== action.payload.id)
    },
  },
});

export const { addPlayer, removePlayer } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.list;

export default playersSlice.reducer;

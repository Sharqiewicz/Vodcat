import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

type Alcohol = {
  name: string;
  percentage: number;
  color: string;
  bonus: boolean;
  id: string;
}

const defaultAlcohol: Alcohol[] = [
  { name: 'Kustosz Tequila', percentage: 6, color: 'yellow', bonus: true, id: '423n5k' },
  { name: 'Vodka', percentage: 40, color: 'white', bonus: false, id: '9b9dma' },
  { name: 'Dębowe Mocne', percentage: 9, color: 'brown', bonus: false, id: 'vsdigbf' },
  { name: 'Woda z ogórków', percentage: 9, color: '#883aff', bonus: false, id: 'vsdigbf' },
]

export interface AlcoholState {
  items: Alcohol[];
}

const initialState: AlcoholState = {
  items: defaultAlcohol
};

export const alcoholSlice = createSlice({
  name: 'alcohol',
  initialState,
  reducers: {
    addItem: (state, action : any) => {
      state.items.push(action.payload);
    },
    remove: (state, action:any) => {
      state.items.filter( item => item.id !== action.id)
    },
  },
});

export const { addItem, remove } = alcoholSlice.actions;

export const selectItems = (state: RootState) => state.alcohol.items;

export default alcoholSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

type Alcohol = {
  name: string;
  percentage: number;
  color: string;
  bonus: boolean;
  id: string;
}

const defaultAlcohols: Alcohol[] = [
  { name: 'Kustosz Tequila', percentage: 6, color: 'yellow', bonus: true, id: '423n5k' },
  { name: 'Vodka', percentage: 40, color: 'white', bonus: false, id: '9b9dma' },
  { name: 'Dębowe Mocne', percentage: 9, color: 'brown', bonus: false, id: 'vsdigbf' },
]

export interface AlcoholsState {
  items: Alcohol[];
}

const initialState: AlcoholsState = {
  items: defaultAlcohols
};

export const alcoholsSlice = createSlice({
  name: 'alcohol',
  initialState,
  reducers: {
    addItem: (state, action : any) => {
      state.items.push(action.value);
    },
    remove: (state, action:any) => {
      state.items.filter( item => item.id !== action.id)
    },
  },
});

export const { addItem, remove } = alcoholsSlice.actions;

export const selectItems = (state: RootState) => state.alcohols.items;

export default alcoholsSlice.reducer;

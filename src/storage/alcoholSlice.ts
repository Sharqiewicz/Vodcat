import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Alcohol } from '../types';
import { getUniqueID } from '../utils';

const defaultAlcohol: Alcohol[] = [
  { name: 'Kustosz Tequila', percentage: 6, color: 'yellow', bonus: true, id: '423n5k' },
  { name: 'Vodka', percentage: 40, color: 'white', bonus: false, id: '9b9dma' },
  { name: 'Dębowe Mocne', percentage: 9, color: 'brown', bonus: false, id: 'ueue' },
  { name: 'Woda z ogórków', percentage: 9, color: '#883aff', bonus: false, id: 'vsdigbf' },
];

export interface AlcoholState {
  items: Alcohol[];
}

const initialState: AlcoholState = {
  items: defaultAlcohol,
};

export const alcoholSlice = createSlice({
  name: 'alcohol',
  initialState,
  reducers: {
    addItem: (state, action: any) => {
      const item: Alcohol = {
        name: action.payload.name,
        percentage: action.payload.percentage,
        color: action.payload.color,
        bonus: action.payload.bonus,
        id: getUniqueID(),
      };
      state.items.push(item);
    },
    removeItem: (state, action: any) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = alcoholSlice.actions;

export const selectItems = (state: RootState) => state.alcohol.items;

export default alcoholSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storage/store';
import { Alcohol } from '../types';
import { getUniqueID } from '../utils';

const defaultAlcohol: Alcohol[] = [
  { name: 'Oliwa', percentage: 0, color: '#B43F3F', bonus: true, id: '423n5k' },
  { name: 'Wódka', percentage: 40, color: '#F8EDE3', bonus: false, id: '9b9dma' },
  { name: 'Tatratea Peach', percentage: 57, color: '#674188', bonus: false, id: 'eujdjirehdhes' },
  { name: 'Rum', percentage: 38, color: '#ECFFE6', bonus: false, id: 'erhfwdkfkdjsdhe232s' },
  { name: 'Tequila', percentage: 38, color: '#FFB200', bonus: false, id: 'erhjsdhedsfijfj232s' },
  { name: 'Gin', percentage: 38, color: '#FFBBCC', bonus: false, id: '324234234' },
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

export const getAlcohol = (state: RootState) => state.alcohol.items;

export default alcoholSlice.reducer;

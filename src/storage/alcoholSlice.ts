import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../storage/store';
import { Alcohol } from '../types';
import { getUniqueID } from '../utils';

const defaultAlcohol: Alcohol[] = [
  { name: 'Keczup', percentage: 0, color: '#B43F3F', bonus: true, id: '423n5k' },
  { name: 'Wódka', percentage: 40, color: '#F8EDE3', bonus: false, id: '9b9dma' },
  { name: 'Dębowe Mocne', percentage: 8, color: '#914F1E', bonus: false, id: 'ueue' },
  { name: 'Lech', percentage: 5, color: '#399918', bonus: false, id: 'fdiuiu2i34u21u4' },
  { name: 'Whisky', percentage: 40, color: '#C5705D', bonus: false, id: 'fdfdswws' },
  { name: 'Tatratea Forest Fruit', percentage: 62, color: '#674188', bonus: false, id: 'eurehdhes' },
  { name: 'Rum', percentage: 38, color: '#ECFFE6', bonus: false, id: 'erhjsdhe232s' },
  { name: 'Tequila', percentage: 38, color: '#FFB200', bonus: false, id: 'erhjsdhe232s' },
  { name: 'Gin', percentage: 38, color: '#FFBBCC', bonus: false, id: 'erhjsdhe232s' },
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

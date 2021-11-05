import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import alcoholReducer from '../storage/alcoholSlice';

export const store = configureStore({
  reducer: {
    alcohol: alcoholReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

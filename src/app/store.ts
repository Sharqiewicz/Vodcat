import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import alcoholsReducer from '../storage/alcoholsSlice';

export const store = configureStore({
  reducer: {
    alcohols: alcoholsReducer,
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

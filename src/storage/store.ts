import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import alcoholReducer from '../storage/alcoholSlice';
import playersReducer from '../storage/playersSlice';

export const store = configureStore({
  reducer: {
    alcohol: alcoholReducer,
    players: playersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

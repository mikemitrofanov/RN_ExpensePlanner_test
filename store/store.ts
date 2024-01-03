import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from './slices/expenses';

export const store = configureStore({
  reducer: {
    expensesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
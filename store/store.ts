import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import expensesReducer from './slices/expenses';
import { expensesApi } from './services/expenses';

export const store = configureStore({
  reducer: {
    expensesReducer,
    [expensesApi.reducerPath]: expensesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expensesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//@ts-ignore
setupListeners(store.dispatch)
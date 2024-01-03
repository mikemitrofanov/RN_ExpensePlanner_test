import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import uuid from "react-native-uuid";

export interface ExpenseInterface {
  id: string,
  description: string,
  amount: number,
  date: Date
}

export interface ExpensesState {
  expenses: Array<ExpenseInterface>
}

const initialState: ExpensesState = {
  expenses: [
    {
      id: uuid.v4().toString(),
      description: 'qeqwe',
      amount: 59.99,
      date: new Date('2023-12-27')
    },
    {
      id: uuid.v4().toString(),
      description: 'asdfasdf',
      amount: 39.99,
      date: new Date('2023-12-20')
    },
    {
      id: uuid.v4().toString(),
      description: 'tyuityityu',
      amount: 5.99,
      date: new Date('2023-11-12')
    },
    {
      id: uuid.v4().toString(),
      description: 'tuydoruitoidrty',
      amount: 15.99,
      date: new Date('2023-10-19')
    }
  ],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      state.expenses.push(action.payload)
    },
    updateExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      const index = state.expenses.findIndex((item) => item.id === action.payload.id);
      state.expenses.splice(index, 1, action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => ({
      ...state,
      expenses: [...state.expenses.filter((item) => item.id !== action.payload)]
    })
  }
});

export const addExpense = expensesSlice.actions.addExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;

export default expensesSlice.reducer
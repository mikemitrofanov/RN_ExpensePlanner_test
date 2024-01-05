import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import uuid from "react-native-uuid";

export interface ExpenseInterface {
  _id: string,
  description: string,
  amount: number,
  date: Date
}

export interface ExpensesState {
  expenses: Array<ExpenseInterface>
}

const initialState: ExpensesState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      state.expenses.push(action.payload)
    },
    updateExpense: (state, action: PayloadAction<ExpenseInterface>) => {
      const index = state.expenses.findIndex((item) => item._id === action.payload._id);
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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ExpenseInterface} from "../slices/expenses";

type ExpensesResponse = ExpenseInterface[];

//@ts-ignore
export const expensesApi = createApi({
  reducerPath: 'expensesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8085/'
  }),
  tagTypes: ['Expenses'],
  endpoints: (builder) => ({
    getExpenses: builder.query<ExpensesResponse, void>({
      query: () => 'expenses',
      providesTags: (result) =>
        result ?
          [
            ...result.map(({ _id }) => ({ type: 'Expenses', _id } as const)),
            { type: 'Expenses', _id: 'LIST' },
          ] : [{ type: 'Expenses', _id: 'LIST' }],
    }),
    createExpense: builder.mutation<ExpenseInterface, Partial<ExpenseInterface>>({
      query: (data) => ({
        url: 'expenses',
        method: 'POST',
        body: data
      }),
      invalidatesTags: [{ type: 'Expenses', _id: 'LIST' }],
    }),
    updateExpense: builder.mutation<ExpenseInterface, Partial<ExpenseInterface>>({
      query: ({ _id, ...data }) => ({
        url: `expenses/${_id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { _id }) => [{ type: 'Expenses', _id }],
    }),
    deleteExpense: builder.mutation<{ id: string }, void>({
      query: ({ _id }) => ({
        url: `expenses/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, _id) => [{ type: 'Expenses', _id }],
    })
  }),
})

export const {
  useGetExpensesQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expensesApi;
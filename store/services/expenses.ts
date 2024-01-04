import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ExpenseInterface} from "../slices/expenses";

//@ts-ignore
export const expensesApi = createApi({
  reducerPath: 'expensesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8085/'
  }),
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => 'expenses'
    }),
    createExpense: builder.mutation({
      query: (data) => ({
        url: 'expenses',
        method: 'POST',
        body: data
      })
    }),
    updateExpense: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `expenses/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteExpense: builder.mutation({
      query: ({ id }) => ({
        url: `expenses/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

export const {
  useGetExpensesQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expensesApi;
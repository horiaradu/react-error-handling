import { Todo } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100' }),
  endpoints: (builder) => ({
    getTodos: builder.query<{ todos: Todo[] }, void>({
      query: () => '/api/todos',
    }),
    createTodo: builder.mutation<{ todo: Todo }, string>({
      query: (title) => ({
        url: '/api/todos',
        method: 'POST',
        body: { todo: { title } },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi;

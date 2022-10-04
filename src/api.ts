import axios, { AxiosError, AxiosResponse } from 'axios';
import { genericErrorHandler } from './genericErrorHandler';
import { Todo } from './types';

axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  async (error: AxiosError) => {
    genericErrorHandler(error);
    return Promise.reject(error);
  },
);

export const getTodos = async () => {
  const response = await axios.get('/api/todos');
  const { todos }: { todos: Todo[] } = response.data;
  console.log(todos);
  return todos;
};

export const createTodo = async (title: string) => {
  const response = await axios.post('/api/todos', { todo: { title } });
  const { todo }: { todo: Todo } = response.data;
  console.log(todo);
  return todo;
};

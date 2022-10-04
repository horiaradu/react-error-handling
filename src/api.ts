import axios from 'axios';
import { Todo } from './types';

axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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

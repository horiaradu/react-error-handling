import { makeAutoObservable } from 'mobx';
import { createTodo, getTodos } from '../api';
import { Todo } from '../types';

export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTodos = async () => {
    const result = await getTodos();
    this.todos = result;
    return this.todos;
  };

  createTodo = async (title: string) => {
    return createTodo(title);
  };
}

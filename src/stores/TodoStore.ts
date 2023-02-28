import { makeAutoObservable } from 'mobx';
import { RootStore } from '.';
import { createTodo, getTodos } from '../api';
import { Todo } from '../types';

export class TodoStore {
  root: RootStore;
  todos: Todo[] = [];

  constructor(root: RootStore) {
    this.root = root;

    makeAutoObservable(this);
  }

  getTodos = async () => {
    try {
      const result = await getTodos();
      this.todos = result;
      return this.todos;
    } catch (e) {
      this.root.errorStore.handleError(e);
      throw e;
    }
  };

  createTodo = async (title: string) => {
    try {
      return await createTodo(title);
    } catch (e) {
      this.root.errorStore.handleError(e);
      throw e;
    }
  };
}

import { TodoStore } from './TodoStore';

export class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore();
  }
}

export default new RootStore();

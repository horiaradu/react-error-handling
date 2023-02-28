import { ErrorStore } from './ErrorStore';
import { TodoStore } from './TodoStore';

export class RootStore {
  todoStore: TodoStore;
  errorStore: ErrorStore;

  constructor() {
    this.todoStore = new TodoStore(this);
    this.errorStore = new ErrorStore();
  }
}

export default new RootStore();

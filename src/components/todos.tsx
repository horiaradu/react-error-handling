import { Todo } from '../types';

export const Todos = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex mb-4 items-center">
          <div className="w-full text-grey-900">{todo.title}</div>
        </li>
      ))}
    </ul>
  );
};

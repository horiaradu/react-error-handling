import { useEffect, useState } from 'react';
import { createTodo, getTodos } from './api';
import './App.css';
import { Todos } from './components/todos';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const onClick = async () => {
    const todo = await createTodo(title);
    setTodos([...todos, todo]);
    setTitle('');
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-bold underline text-grey-900">
            Yet another TODO list
          </h1>

          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-800"
              placeholder="Add Todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}></input>
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:text-white hover:bg-teal-500"
              onClick={onClick}>
              Add
            </button>
          </div>
        </div>

        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;

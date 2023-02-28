import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import storesContext from './contexts/storesContext';
import { observer } from 'mobx-react-lite';

function Todos() {
  const { todoStore } = useContext(storesContext);

  useEffect(() => {
    todoStore.getTodos();
  }, [todoStore]);

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-bold underline text-grey-900">
            Yet another TODO list
          </h1>

          <div className="flex mt-4">
            <Link
              to="/new"
              className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:text-white hover:bg-teal-500">
              Add todo
            </Link>
          </div>
        </div>

        <ul>
          {todoStore.todos.map((todo) => (
            <li key={todo.id} className="flex mb-4 items-center">
              <div className="w-full text-grey-900">{todo.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default observer(Todos);

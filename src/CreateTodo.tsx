import { useState } from 'react';
import { createTodo } from './api';

import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

function CreateTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const mutation = useMutation(['createTodo'], createTodo, {
    onSuccess: () => {
      navigate('/');
    },
  });

  const onClick = async () => {
    mutation.mutate(title);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-bold underline text-grey-900">
            New TODO
          </h1>

          <div className="flex mt-4">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-800 ${
                mutation.isError && 'border-rose-500'
              }`}
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
      </div>
    </div>
  );
}

export default CreateTodo;

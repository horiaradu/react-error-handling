import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import { Todos } from './components/todos';

const todos = [
  {
    id: 1,
    title: 'Take out trash',
  },
  {
    id: 2,
    title: 'Walk the dog',
  },
  {
    id: 3,
    title: 'Feed the dog',
  },
  {
    id: 4,
    title: 'Vacuum the house',
  },
];

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-50 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-bold underline text-grey-900">
            Yet another TODO list
          </h1>

          <div className="flex mt-4">
            <Input />
            <Button />
          </div>
        </div>

        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;

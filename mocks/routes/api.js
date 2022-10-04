let todos = [
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

const genericError = {
  code: 'GENERIC_ERROR',
  message: 'Something went wrong',
};

const titleEmpty = {
  code: 'INVALID_TITLE',
  message: 'Invalid title',
};

module.exports = [
  {
    id: 'get-todos',
    url: '/api/todos',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: { status: 200, body: { todos } },
      },
      {
        id: 'error',
        type: 'json',
        options: { status: 500, body: { genericError } },
      },
    ],
  },
  {
    id: 'create-todo',
    url: '/api/todos',
    method: 'POST',
    variants: [
      {
        id: 'success',
        type: 'middleware',
        options: {
          middleware: (req, res, next, core) => {
            const { todo } = req.body;
            const newTodo = { ...todo, id: todos.length + 1 };
            todos.push(newTodo);

            res.status(200);
            res.send({ todo: newTodo });
          },
        },
      },
      {
        id: 'error',
        type: 'json',
        options: { status: 400, body: { error: titleEmpty } },
      },
    ],
  },
];

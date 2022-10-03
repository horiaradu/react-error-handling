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
  code: 'BAD_REQUEST',
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
        options: { status: 400, body: { genericError } },
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

            todos = [...todos, { ...todo, id: todos.length + 1 }];

            res.status(200);
            res.send({ todos });
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

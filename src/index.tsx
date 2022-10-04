import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Todos from './Todos';
import CreateTodo from './CreateTodo';
import reportWebVitals from './reportWebVitals';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />,
  },
  {
    path: '/new',
    element: <CreateTodo />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

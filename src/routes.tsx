import { createBrowserRouter, redirect } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/trials'),
  },
  {
    path: '/trials',
    element: <div>Trials</div>,
  },
  {
    path: '/participants',
    element: <div>Participants</div>,
    children: [
      {
        path: '/enroll',
        element: <div>Enroll</div>,
      },
    ],
  },
]);

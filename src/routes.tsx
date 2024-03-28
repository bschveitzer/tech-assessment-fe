import { createBrowserRouter, redirect } from 'react-router-dom';
import { Trials } from './scenes/trials';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/trials'),
  },
  {
    path: '/trials',
    element: <Trials />,
  },
  {
    path: '/participants',
    element: <div>Participants</div>,
    children: [
      {
        path: '/participants/enroll',
        element: <div>Enroll</div>,
      },
    ],
  },
]);

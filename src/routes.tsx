import { createBrowserRouter, redirect } from 'react-router-dom';
import { Trials } from './scenes/trials';

export const router = createBrowserRouter([
  {
    id: '',
    path: '/',
    loader: () => redirect('/trials'),
  },
  {
    id: 'trials',
    path: '/trials',
    element: <Trials />,
  },
  {
    id: 'participants',
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

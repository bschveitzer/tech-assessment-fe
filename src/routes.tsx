import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import { Trials } from './scenes/trials';
import { BaseLayout } from './components/layout/BaseLayout';
import { Participants } from './scenes/participants';
import { Enroll } from './scenes/enroll';

export const routes = (
  <Route element={<BaseLayout />}>
    <Route path="/" loader={() => redirect('/trials')} />
    <Route id="trials" path="trials" element={<Trials />} />
    <Route id="participants" path="participants" element={<Participants />} />
    <Route id="enroll" path="enroll" element={<Enroll />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));

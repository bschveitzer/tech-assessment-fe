import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import { Trials } from './scenes/trials';
import { BaseLayout } from './components/layout/BaseLayout';
import { Participants } from './scenes/participants';

export const routes = (
  <Route element={<BaseLayout />}>
    <Route path="/" loader={() => redirect('/trials')} />
    <Route id="trials" path="/trials" element={<Trials />} />
    <Route id="participants" path="/participants" element={<Participants />}>
      <Route
        id="enroll"
        path="/participants/enroll"
        element={<div>Enroll</div>}
      />
    </Route>
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));

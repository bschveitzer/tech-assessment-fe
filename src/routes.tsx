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
import { SuccessEnrollment } from './components/feedback/SuccessEnrollment';
import { ErrorEnrollment } from './components/feedback/ErrorEnrollment';

export const routes = (
  <Route element={<BaseLayout />}>
    <Route path="/" loader={() => redirect('/trials')} />
    <Route id="trials" path="trials" element={<Trials />} />
    <Route id="participants" path="participants" element={<Participants />} />
    <Route id="enroll" path="enroll" element={<Enroll />} />
    <Route id="success" path="success" element={<SuccessEnrollment />} />
    <Route id="error" path="error" element={<ErrorEnrollment />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));

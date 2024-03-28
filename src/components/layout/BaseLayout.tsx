import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

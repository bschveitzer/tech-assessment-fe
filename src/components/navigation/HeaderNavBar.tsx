import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { router } from '../../routes';
import { capitalizeFirstLetter } from '../../utils/stringFormat';

const availableRoutes = ['trials', 'participants'];

const NavBar = styled.ul`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
  }

  li {
    color: #0c0c0d7a;
    position: relative;
    list-style: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  .active {
    li {
      color: #325f64;
    }
  }
`;

export const HeaderNavBar: React.FC = () => {
  const routes = router.routes[0].children;
  const navRoutes = routes
    ?.filter((route) => route.path && availableRoutes.includes(route.path))
    .reverse();

  return (
    <NavBar>
      {navRoutes?.map((route) =>
        route.path && route.id ? (
          <NavLink
            to={route.path}
            key={route.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>{capitalizeFirstLetter(route?.id)}</li>
          </NavLink>
        ) : (
          <></>
        )
      )}
    </NavBar>
  );
};

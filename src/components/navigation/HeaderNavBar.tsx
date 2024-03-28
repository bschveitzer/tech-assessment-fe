import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { router } from '../../routes';
import { capitalizeFirstLetter } from '../../utils/stringFormat';

const NavUnlisted = styled.ul`
  display: flex;
  gap: 1rem;

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
  const navRoutes = router.routes
    .filter((route) => route.id)
    .sort((a, b) => a.id.localeCompare(b.id));

  return (
    <NavUnlisted>
      {navRoutes.map((route) =>
        route.path ? (
          <NavLink
            to={route.path}
            key={route.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li>{capitalizeFirstLetter(route.id)}</li>
          </NavLink>
        ) : (
          <></>
        )
      )}
    </NavUnlisted>
  );
};

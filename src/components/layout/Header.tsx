import styled from 'styled-components';
import { HeaderNavBar } from '../navigation/HeaderNavBar';

import { ReactComponent as CurebaseLogo } from '../../assets/svg/curebase-logo.svg';

const StyledHeader = styled.header`
  display: flex;
  background-color: #f5f5f5;
  height: 148px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <CurebaseLogo />
      <HeaderNavBar />
    </StyledHeader>
  );
};

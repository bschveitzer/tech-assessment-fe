import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import styled from 'styled-components';

const Layout = styled.div``;

const InnerLayout = styled.main`
  padding: 0 20%;

  @media screen and (max-width: 800px) {
    padding: 0 5%;
  }
`;
export const BaseLayout = () => {
  return (
    <Layout>
      <Header />
      <InnerLayout>
        <Outlet />
      </InnerLayout>
    </Layout>
  );
};

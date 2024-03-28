import React from 'react';
import styled from 'styled-components';

interface AppProps {
  children: React.ReactNode;
}

const DefaultApp = styled.div`
  font-family: 'Lato', sans-serif;
`;

const App: React.FC<AppProps> = ({ children }) => {
  return <DefaultApp>{children}</DefaultApp>;
};

export default App;

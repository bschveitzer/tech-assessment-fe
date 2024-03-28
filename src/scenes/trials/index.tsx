import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_TRIALS } from './graphql/queries';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';

export const Trials: React.FC = () => {
  const { data, loading } = useQuery(GET_TRIALS);

  console.log(data, loading, process.env.REACT_APP_API_URL);
  return (
    <Container>
      <PageHeader title="Trials" />
      Trials 1
    </Container>
  );
};

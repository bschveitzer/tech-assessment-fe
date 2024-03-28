import { useQuery } from '@apollo/client';
import React, { useCallback } from 'react';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import { ListItem } from '../../components/dataDisplay/ListItem';
import * as GQL from '../../__generated__/graphql';
import { format } from 'date-fns';
import { Button } from '../../components/buttons/Button';
import { GET_TRIALS } from '../trials/graphql/queries';

export const Enroll: React.FC = () => {
  const { data, loading } = useQuery<{ trials: GQL.Trial[] }>(GET_TRIALS);

  // const handleEnrollClick = useCallback(() => {
  //   navigate('/enroll');
  // }, [navigate]);

  return (
    <Container>
      <PageHeader title="Enroll a participant" />
      {loading ? <div>Loading...</div> : <div>Enroll</div>}
    </Container>
  );
};

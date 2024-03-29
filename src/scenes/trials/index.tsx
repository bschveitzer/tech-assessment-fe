import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_TRIALS } from './graphql/queries';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import { ListItem } from '../../components/dataDisplay/ListItem';
import * as GQL from '../../__generated__/graphql';

export const Trials: React.FC = () => {
  const { data, loading } = useQuery<{ trials: GQL.Trial[] }>(GET_TRIALS, {
    fetchPolicy: 'network-only',
  });

  return (
    <Container>
      <PageHeader title="Trials" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.trials.map((trial: GQL.Trial) => (
            <ListItem
              key={trial.id}
              title={trial.name}
              description={`${trial._count?.participants} participants`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

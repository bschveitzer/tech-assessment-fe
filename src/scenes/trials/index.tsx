import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_TRIALS } from './graphql/queries';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import { ListItem } from '../../components/dataDisplay/ListItem';

export const Trials: React.FC = () => {
  const { data, loading } = useQuery(GET_TRIALS);

  return (
    <Container>
      <PageHeader title="Trials" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.trials.map((trial: any) => (
            <ListItem
              title={trial.name}
              description={`${trial._count.participants} participants`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

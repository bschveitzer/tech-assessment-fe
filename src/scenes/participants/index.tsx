import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_PARTICIPANTS } from './graphql/queries';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import { ListItem } from '../../components/dataDisplay/ListItem';
import * as GQL from '../../__generated__/graphql';
import { format } from 'date-fns';

export const Participants: React.FC = () => {
  const { data, loading } = useQuery<{ participants: GQL.Participant[] }>(
    GET_PARTICIPANTS
  );

  return (
    <Container>
      <PageHeader title="Participants" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.participants.map((participant: GQL.Participant) => (
            <ListItem
              title={participant.name}
              description={`Enrolled in ${format(
                participant.createdAt,
                'MMMM, dd'
              )}`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

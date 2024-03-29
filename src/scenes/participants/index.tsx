import { useQuery } from '@apollo/client';
import React, { useCallback } from 'react';
import { GET_PARTICIPANTS } from './graphql/queries';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import { ListItem } from '../../components/dataDisplay/ListItem';
import * as GQL from '../../__generated__/graphql';
import { format } from 'date-fns';
import { Button } from '../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';

export const Participants: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<{ participants: GQL.Participant[] }>(
    GET_PARTICIPANTS,
    { fetchPolicy: 'network-only' }
  );

  const handleEnrollClick = useCallback(() => {
    navigate('/enroll');
  }, [navigate]);

  return (
    <Container>
      <PageHeader
        title="Participants"
        action={
          <Button onClick={handleEnrollClick} $contained>
            Enroll a participant
          </Button>
        }
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.participants.map((participant: GQL.Participant) => (
            <ListItem
              key={participant.id}
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

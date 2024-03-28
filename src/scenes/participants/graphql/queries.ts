import { gql } from '@apollo/client';

export const GET_PARTICIPANTS = gql`
  query getParticipants {
    participants {
      name
      createdAt
    }
  }
`;

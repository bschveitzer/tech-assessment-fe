import { gql } from '@apollo/client';

export const GET_TRIALS = gql`
  query getTrials {
    trials {
      name
      _count {
        participants
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const ENROLL_PARTICIPANT = gql`
  mutation EnrollParticipant($participant: EnrollParticipant!) {
    enrollParticipant(participant: $participant) {
      id
      isEligible
    }
  }
`;

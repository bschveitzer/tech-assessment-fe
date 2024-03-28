import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_TRIALS } from './graphql/queries';

export const Trials: React.FC = () => {
  const { data, loading } = useQuery(GET_TRIALS);

  console.log(data, loading, process.env.REACT_APP_API_URL);
  return <div>Trials 1</div>;
};

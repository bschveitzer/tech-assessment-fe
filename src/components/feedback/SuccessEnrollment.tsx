import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ReactComponent as SucessIcon } from '../../assets/svg/ok.svg';
import { Button } from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20%;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

const StyledDescription = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const SuccessEnrollment: React.FC = () => {
  const navigate = useNavigate();

  const handleActionClick = useCallback(() => {
    navigate('/participants');
  }, [navigate]);

  return (
    <StyledContainer>
      <SucessIcon />
      <StyledTitle>Participant is eligible</StyledTitle>
      <StyledDescription>
        The participant can participate to this study
      </StyledDescription>

      <Button $contained onClick={handleActionClick}>
        Ok
      </Button>
    </StyledContainer>
  );
};

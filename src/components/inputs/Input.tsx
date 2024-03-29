import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
}

const StyledInput = styled.input`
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  padding: 12px 8px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0c0c0db8;
  margin-bottom: 20px;
`;

const StyledErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;
  line-height: 16px;
  color: #a91f1d;
`;

export const Input: React.FC<InputProps> = ({
  label,
  inputProps,
  errorMessage,
}) => {
  return (
    <StyledLabel htmlFor={inputProps.name}>
      {label}
      <StyledInput
        id={inputProps.name}
        type={inputProps.type ?? 'text'}
        name={inputProps.name}
        onChange={inputProps.onChange}
        onBlur={inputProps.onBlur}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledLabel>
  );
};

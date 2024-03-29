import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
}
const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  padding: 12px 8px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #0c0c0db8;
`;

const StyledErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;
  line-height: 16px;
  color: #a91f1d;
`;

export const Checkbox: React.FC<InputProps> = ({
  label,
  inputProps,
  errorMessage,
}) => {
  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={inputProps.name}>
        <StyledInput
          id={inputProps.name}
          type={inputProps.type ?? 'text'}
          name={inputProps.name}
          onChange={inputProps.onChange}
          onBlur={inputProps.onBlur}
        />
        {label}
      </StyledLabel>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledInputGroup>
  );
};

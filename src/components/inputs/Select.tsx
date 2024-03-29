import React, { BaseSyntheticEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CustomSelectOption {
  label: string;
  value: string;
}

interface InputProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
  options: CustomSelectOption[];
  onChange(value: string): void;
}

const StyledInput = styled.select`
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

export const Select: React.FC<InputProps> = ({
  label,
  inputProps,
  errorMessage,
  options,
  onChange,
}) => {
  return (
    <StyledLabel htmlFor={inputProps.name}>
      {label}
      <StyledInput
        id={inputProps.name}
        name={inputProps.name}
        onChange={(e: BaseSyntheticEvent) => onChange(e.target.value)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledInput>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </StyledLabel>
  );
};

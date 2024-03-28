import styled, { css } from 'styled-components';

export const Button = styled.button<{ $contained?: boolean }>`
  background: transparent;
  border-radius: 4px;
  border: 1px solid #325f64;
  color: #325f64;
  padding: 10px 16px;
  cursor: pointer;

  ${(props) =>
    props.$contained &&
    css`
      background: #325f64;
      color: white;
      &:hover {
        background: transparent;
        color: #325f64;
        transition: 0.3s;
      }
    `}
`;

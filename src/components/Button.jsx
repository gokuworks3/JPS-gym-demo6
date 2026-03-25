import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ primary, theme }) => (primary ? theme.colors.primary : 'transparent')};
  color: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.primary)};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.primary)};
    color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.white)};
  }
`;

const Button = ({ children, primary = false, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--color-BG2)'  : 'var(--color-BG1)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ primaryBtnTextColor }) => (primaryBtnTextColor ? 'var(--color-BG1)' : 'var(--color-BG2)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    transition: all 0.2s all ease-in-out;
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: var(--font-weight-heavy);
  }
`;

export const Button2 = styled(Button)`
  border-radius: 50px;

  &:hover {
    transition: all 0.2s all ease-in-out;
    transform: translateY(1px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.0);
    text-decoration: underline;
  }
`;
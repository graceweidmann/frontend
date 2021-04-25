// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
//   color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 10px;
// `;

// render(
//   <div>
//     <Button>Normal</Button>
//     <Button primary>Primary</Button>
//   </div>
// );
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--primary-color-button)'  : 'var(--secondary-color-button)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ primaryBtnTextColor }) => (primaryBtnTextColor ? 'var(--primary-color-button-text)' : 'var(--secondary-color-button-text)')};
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
  
    /* color: ${({ primaryBtnTextColor }) => (primaryBtnTextColor ? 'var(--secontary-color-button-text)' : 'var(--primary-color-button-text)')}; */

  }
`;

export const Button2 = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'var(--primary-color-button)'  : 'var(--secondary-color-button)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ primaryBtnTextColor }) => (primaryBtnTextColor ? 'var(--primary-color-button-text)' : 'var(--secondary-color-button-text)')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: auto;

  &:hover {
    transition: all 0.2s all ease-in-out;
    font-weight: var(--font-weight-heavy);
    transform: translateY(1px);
   
  }
`;
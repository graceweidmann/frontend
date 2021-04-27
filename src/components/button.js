
import GlobalStyle from '../theme/globalStyle';
const buttonColor = "#1D2A73";
const buttonTextColor = "white";

export const Button = styled.button`
padding: 1.5rem 2.5rem;
color: var(--text-color-light);
background: var(--color2);
display: border-box;
cursor: pointer;
font-size: 1.4rem;
border: none;
outline: none;
border-radius: 3rem;
position: inherit;
margin-top: 60vh;
justify-content: center;
align-items: center;
left: 60%;
transform: translateX(-50%);
transition: all 0.3s;

&:hover {
  background: var(--secondary-color-button);
  color: var(--color2);
  transform: translateX(-52%) translateY(-5%) scale(1.05);
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
}

&:active {
  transform: translateX(-50%) translateY(-2%);
  box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.5);
}
`;

export const Button2 = styled(Button)`
background: var(--secondary-color-button);
color: var(--color2);
margin-top: 1vh;
padding: 1rem 2.5rem;
`;

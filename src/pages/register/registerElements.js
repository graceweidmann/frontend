import styled from 'styled-components';
// import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import defaultHeroBg from "../../images/heroBg.png";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ;
  width:100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: liner-linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      liner-linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroBgImg = styled.img`
  width: 100%;
  height: 100%;

  -o-object-fit: cover;
  object-fit: cover;
  display:flex;
  flex-direction: column;
  overflow: hidden;
    background: url(${defaultHeroBg}) no-repeat;
  `;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-flow: column nowrap;

`;

export const HeroH1 = styled.h1`
  color: var(--primaryBtnTextColor);
  font-size: 48px;
  text-align: center;

  //styleName: Fließtext;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: center;


  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

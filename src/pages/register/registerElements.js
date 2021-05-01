import styled from 'styled-components';
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

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 1rem;
  color: var(--primary);
  text-align: center;
  max-width: var(--media-S);

`;
export const HeroBtnWrapper = styled.div`
  margin-top: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

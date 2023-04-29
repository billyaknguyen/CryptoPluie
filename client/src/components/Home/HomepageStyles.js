import styled from "styled-components";
import WaveDivider from "./assets/wavedivider.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HeroSection = styled.section`
  height: 100vh;
  background-image: url(https://media.discordapp.net/attachments/899929905318486046/1094135069867782155/new_background_pic_HD.jpg?width=1752&height=819);
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const AnimatedLetter = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: rainTitle 0.5s linear forwards;
  animation-delay: ${({ delay }) => delay || 0}s;

  @keyframes rainTitle {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 400px;
  font-size: 4rem; 
  color: #f1fafc;
  text-align: center;
`;

export const Wave = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-image: url(${WaveDivider});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const SecondSection = styled.section`
  background-color: #f1fafc;
  display: flex;
  justify-content: center;
  min-height: 500px;
`;
export const SecondSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 702px;
`;
export const SecondSectionTitle = styled.h2`
  font-size: 3rem;
  color: #85a7c0;
`;

export const CoinsSlider = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const CoinImg = styled.img`
  width: 100px;
  height: 100px;
  animation: coinFall 1s linear;

  @keyframes coinFall {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const RainCoatImg = styled.img`
  width: 400px;
  height: 400px;
  margin: 30px;
`;

export const ThirdSection = styled.section`
  background-color: #f1fafc;
  display: flex;
  justify-content: center;
  min-height: 500px;
`;

export const ThirdSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

export const RichImg = styled.img`
  width: 450px;
  height: 450px;
`;

export const ThirdSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #85a7c0;
`;

export const ThirdSectionText = styled.p`
  color: #213651;
  width: 100%;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 0;
`;

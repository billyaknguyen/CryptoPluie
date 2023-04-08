import styled from "styled-components";
import WaveDivider from "./wavedivider.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FirstSection = styled.section`
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
  color: white;
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
  border: 2px solid green;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Wave = styled.div`
  /* position: absolute; */
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  background-image: url(${WaveDivider});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  /* border: 2px solid black; */
`;

export const RainCoatImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const H2 = styled.h2`
  font-size: 50px;
  color: black;
`;
export const SecondSection = styled.section`
  background-color: #f1fafc;
  display: flex;
  justify-content: center;
  min-height: 500px;
`;

import styled from "styled-components";
import WaveDivider from "./wavedivider.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FirstSection = styled.section`
  height: 100vh;
  background-image: url(https://cdn.discordapp.com/attachments/899929905318486046/1093585672926920785/24a9ncHG_2x.jpg);
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
  margin-top: 300px;
  font-size: 4rem;
  border: 2px solid green;
  font-family: "Raleway", sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-image: url(${WaveDivider});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  /* border: 2px solid black; */
`;

export const SecondSection = styled.section`
  background-color: #f1fafc;
  min-height: 300px;
`;

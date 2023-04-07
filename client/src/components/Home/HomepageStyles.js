import styled from "styled-components";

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
  border: 3px solid red;
`;

export const AnimatedLetter = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  color: white;
  opacity: 0;
  animation: rainTitle 2s linear forwards;
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
      border-radius: 0;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
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

export const SecondSection = styled.section`
  background-color: #f1fafc;
  height: 500px;
`;

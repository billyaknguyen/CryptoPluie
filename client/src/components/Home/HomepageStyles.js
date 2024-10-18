import styled from "styled-components";
import WaveDivider from "./assets/wavedivider.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(https://cdn.discordapp.com/attachments/899929905318486046/1296709268895961119/new_background_pic_HD.jpg?ex=6713461d&is=6711f49d&hm=6fa090630cd98546eed4c53f8ce78b494e6f65d840a2ab5484173143e74a8d85&);
  background-size: cover;
  background-position: center;
`;


export const HeroSectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.div`
  text-align: center;
  font-size: 3em;
  background: linear-gradient(to left, #acb6e5, #86fde8);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (min-width: 800px) {
  font-size: 4em;
 }

`

export const HeroText = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  padding: 20px;
  background: linear-gradient(
    to right, #e0eafc, #cfdef3
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 800px) {
  font-size: 2em;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1fafc;
 min-height: 500px;

 @media (min-width: 800px) {
  flex-direction: row;
 }
`;
export const SecondSectionWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 702px;

  @media (min-width: 800px) {
  margin: 0;
  display: flex;
  align-items: left;
  justify-content: left;
 }
`;
export const SecondSectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  background: linear-gradient(to left, #2b5876, #4e4376);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 800px) {
    font-size: 3em;
    text-align: center;
 }
`;

export const SecondSectionText = styled.p`
  color: #213651;
  font-size: 1.5em;
  width: 90%;
  text-align: center;
  font-style: italic;

  @media (min-width: 800px) {
    text-align: left;
    margin-top: 0;
 }


`;

export const SecondSectionWord = styled.span `
font-weight: bold;
`

export const CoinsSlider = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 300px;

  @media (min-width: 800px) {
    justify-content: center;
 }
`;

export const CoinImg = styled.img`
  width: 35px;
  height: 35px;
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

  @media (min-width: 448px) {
    width: 60px;
    height: 60px;
  }
`;

export const RainCoatImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  margin: auto;

  @media (min-width: 800px) {
  max-width: 350px;
  max-height: 350px;
  }

  @media (min-width: 1441px) {
    margin: 30px;
    max-width: 400px;
  max-height: 400px;
  }
`;

export const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1fafc;
  min-height: 500px;

  @media (min-width: 800px) {
   flex-direction: row;
  }
`;

export const ThirdSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
  width: 100%;
  max-width: 700px;
`;

export const ThirdSectionButtonWrapper = styled.div `
display: flex;
justify-content: center;

`
export const RichImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
`;

export const ThirdSectionTitle = styled.h2`
  font-size: 2.5em;
  width: 90%;
  text-align: center;
  background: linear-gradient(to left, #2b5876, #4e4376);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 800px) {
   font-size: 2.5em;
   text-align: left;
  }
`;

export const ThirdSectionText = styled.p`
  color: #213651;
  text-align: center;
  width: 90%;
  font-size: 1.5em;
  font-style: italic;
  margin-top: 0;

  @media (min-width: 800px) {
   text-align: left;
  }

`;

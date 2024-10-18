import { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SignUpButton from "../Navbar/SignUpButton";
import { useAuth0 } from "@auth0/auth0-react";
import Coins from "./assets/Coins";
import {
  HomeContainer,
  HeroSection,
  SecondSection,
  TitleText,
  Wave,
  RainCoatImg,
  SecondSectionTitle,
  SecondSectionText,
  SecondSectionWord,
  SecondSectionWrapper,
  CoinsSlider,
  CoinImg,
  ThirdSection,
  ThirdSectionWrapper,
  ThirdSectionTitle,
  ThirdSectionText,
  RichImg,
  HeroText,
  HeroSectionTextContainer,
  ThirdSectionButtonWrapper,
} from "./HomepageStyles";

const HomePage = () => {
  const myRef = useRef();
  const [playCoinAnimation, setPlayCoinAnimation] = useState(false);
  const {isAuthenticated} = useAuth0();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setPlayCoinAnimation(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <HeroSectionTextContainer>
          <TitleText>Make it rain with CryptoPluie</TitleText>
          <HeroText>
            by creating your virtual portfolio and ride the storm to the
            top of our leaderboard!
          </HeroText>
          {!isAuthenticated &&<SignUpButton />}
        </HeroSectionTextContainer>
      </HeroSection>
      <Wave />
      <SecondSection>
        <SecondSectionWrapper>
          <SecondSectionTitle>Track Cryptocurrency prices</SecondSectionTitle>
          <SecondSectionText>Get access to up-to-date information on <br/><SecondSectionWord>200+ cryptocurrencies</SecondSectionWord> so you can make informed investment decisions</SecondSectionText>
          <CoinsSlider ref={myRef}>
            {Coins.map((coin, index) => {
              return (
                playCoinAnimation && (
                  <CoinImg key={index} src={coin.src} alt={coin.alt} />
                )
              );
            })}
          </CoinsSlider>
        </SecondSectionWrapper>
        <RainCoatImg src="https://cdn.discordapp.com/attachments/899929905318486046/1296713715080499264/rainCoatSecondSection_Billy_Nguyen.jpeg?ex=67134a41&is=6711f8c1&hm=aaa1f8515e682ac525125b94c6a085542d29f097f6c001ff98ab68c7288f86f5&" />
      </SecondSection>
      <Wave />
      <ThirdSection>
        <RichImg src="https://cdn.discordapp.com/attachments/899929905318486046/1296713943313547304/RainCoatBilly_N3.png?ex=67134a77&is=6711f8f7&hm=4323614e35eb3a7a960d8203baa7f91b00d8b6b6114d322c54940a3c9dc20503&" />
        <ThirdSectionWrapper>
          <ThirdSectionTitle>
            Turn Rainy Days into Crypto Gains
          </ThirdSectionTitle>
          <ThirdSectionText>
            Embrace the downpour of cryptocurrency opportunities with a virtual
            portfolio. Get hands-on experience, <br />
            rain or shine , it is risk-free.
          </ThirdSectionText>
          <ThirdSectionButtonWrapper>
          {!isAuthenticated &&<SignUpButton />}
          </ThirdSectionButtonWrapper>
        </ThirdSectionWrapper>
      </ThirdSection>
    </HomeContainer>
  );
};

export default HomePage;

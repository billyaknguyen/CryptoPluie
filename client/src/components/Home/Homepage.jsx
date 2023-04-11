import { useRef, useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar"
import Coins from "./assets/coins";
import { HomeContainer, HeroSection, SecondSection,  AnimatedLetter, TitleContainer, Wave, RainCoatImg, SecondSectionTitle, SecondSectionWrapper, CoinsSlider, CoinImg, ThirdSection, ThirdSectionWrapper, ThirdSectionTitle, ThirdSectionText, RichImg } from "./HomepageStyles";

const HomePage = () => {
const text = "Making it Rain with CryptoPluie";
const myRef = useRef()
const [playCoinAnimation, setPlayCoinAnimation] = useState(false)

useEffect(() => {
const observer = new IntersectionObserver((entries) => {
const entry = entries[0];
setPlayCoinAnimation(entry.isIntersecting)
}, {
  threshold : 1
})
observer.observe(myRef.current)

return () => {
  observer.disconnect();
}
  }, [])
  
  const animatedTitle = text.split('').map((letter, index) => 
    letter === " " ? " " :
      <AnimatedLetter key={index} delay={index * 0.1}>
        {letter}
      </AnimatedLetter>
  )

return (
    <HomeContainer>
      <Navbar />
      <HeroSection >
      <TitleContainer>{animatedTitle}</TitleContainer>
      </HeroSection>
      <Wave/>
      <SecondSection >
      <SecondSectionWrapper>
        <SecondSectionTitle >Track Cryptocurrency prices</SecondSectionTitle>
        <CoinsSlider ref={myRef}>
          {Coins.map((coin, index) => {
            return playCoinAnimation && (
            <CoinImg key={index} src={coin.src} alt={coin.alt} />
            )
          })}
        </CoinsSlider>
        </SecondSectionWrapper>
      <RainCoatImg src="https://cdn.discordapp.com/attachments/899929905318486046/1095205154837516368/rainCoatSecondSection_Billy_Nguyen.jpeg"/>
      </SecondSection>
      <Wave/>
      <ThirdSection>
      <RichImg src="https://cdn.discordapp.com/attachments/899929905318486046/1095181669926977616/RainCoatBilly_N3.png"/>
        <ThirdSectionWrapper>
          <ThirdSectionTitle>Turn Rainy Days into Crypto Gains</ThirdSectionTitle>
          <ThirdSectionText>
          Embrace the downpour of cryptocurrency opportunities with a virtual portfolio.
          Get hands-on experience, <br/>rain or shine , it is risk-free.</ThirdSectionText>
        </ThirdSectionWrapper>
      </ThirdSection>
  </HomeContainer>
)
} 

export default HomePage
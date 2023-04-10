import { useRef, useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar"
import Coins from "./assets/coins";
import { HomeContainer, FirstSection, SecondSection,  AnimatedLetter, TitleContainer, Wave, RainCoatImg, SecondSectionTitle, SecondSectionWrapper, CoinsSlider, CoinImg, ThirdSection } from "./HomepageStyles";

const HomePage = () => {
const text = "Everything Crypto with CryptoPluie";
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
      <FirstSection >
      <TitleContainer>{animatedTitle}</TitleContainer>
      </FirstSection>
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
      <RainCoatImg src="https://cdn.discordapp.com/attachments/899929905318486046/1094452815725858827/RainCoat_Billy_Nguyen.PNG"/>
      </SecondSection>
      <Wave/>
      <ThirdSection> hello</ThirdSection>
  </HomeContainer>
)
} 

export default HomePage
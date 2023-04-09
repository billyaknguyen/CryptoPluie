import { useRef, useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar"
import { HomeContainer, FirstSection, SecondSection,  AnimatedLetter, TitleContainer, Wave, RainCoatImg, SecondSectionTitle, SecondSectionWrapper, CoinsSlider, CoinImg, ThirdSection } from "./HomepageStyles";
import BitcoinPic from "./assets/bitcoin.svg";
import Ethereum from "./assets/ethereum.svg"
import DogeCoin from "./assets/dogecoin.svg"
import Xrp from "./assets/x.svg"
import Polygon from "./assets/polygon.svg"
import Solana from "./assets/solana.svg"


const HomePage = () => {
  const text = "Track your portfolio with CryptoPluie";
  const coins = [
{src: BitcoinPic, alt: "Bitcoin"},
{src: Ethereum, alt: "Ethereum"},
{src: DogeCoin, alt: "DogeCoin"},
{src: Xrp, alt: "Xrp"},
{src: Polygon, alt: "Polygon"},
{src: Solana, alt: "Solana"}
]
const myRef = useRef()
const [playCoinAnimation, setPlayCoinAnimation] = useState(false)

useEffect(() => {
const observer = new IntersectionObserver((entries) => {
const entry = entries[0];
setPlayCoinAnimation(entry.isIntersecting)
},
)
observer.observe(myRef.current)
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
          {coins.map((coin, index) => {
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
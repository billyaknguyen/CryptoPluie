import Navbar from "../Navbar/Navbar"
import { HomeContainer, FirstSection, SecondSection,  AnimatedLetter, TitleContainer, Wave, RainCoatImg, H2} from "./HomepageStyles"


const HomePage = () => {
  const text = "Track your portfolio with CryptoPluie";

  const animatedTitle = text.split('').map((letter, index) => {
    if (letter === ' ') {
      return ' ';
    }
    return (
      <AnimatedLetter key={index} delay={index * 0.1}>
        {letter}
      </AnimatedLetter>
    );
  });

return (
    <HomeContainer>
      <Navbar />
      <FirstSection>
      <TitleContainer>{animatedTitle}</TitleContainer>
      </FirstSection>
      <Wave/>
      <SecondSection>
        <H2>Track Cryptocurrency prices</H2>
      <RainCoatImg src="https://cdn.discordapp.com/attachments/899929905318486046/1094115373827248218/raincoat.PNG"/>
      </SecondSection>
  </HomeContainer>
)
}

export default HomePage
import Navbar from "../Navbar/Navbar"
import { HomeContainer, FirstSection, SecondSection,  AnimatedLetter, TitleContainer} from "./HomepageStyles"


const HomePage = () => {
  const text = "Simulate, Track & Learn during rainy days";

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
      <SecondSection></SecondSection>
  </HomeContainer>
)
}

export default HomePage
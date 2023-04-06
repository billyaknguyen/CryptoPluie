import Navbar from "../Navbar/Navbar"
import { HomeContainer, FirstSection, SecondSection} from "./HomepageStyles"


const HomePage = () => {
return (
    <HomeContainer>
      <FirstSection>
      <Navbar />
      </FirstSection>
      <SecondSection></SecondSection>
  </HomeContainer>
)
}

export default HomePage
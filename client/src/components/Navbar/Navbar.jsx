import { NavContainer, MainTitle, SignUpButton, HomeLinksWrapper, Logo, NavigationLinksWrapper, TitleLink, LogoLink, CoinsLink, PortfolioLink, AboutLink} from "./NavbarStyles";
import { useState, useEffect } from "react";

const Navbar = () => {
   const [isScrolledDown, setIsScrolledDown] = useState(false)
   
   useEffect(() => {
    const handleScroll = () => {
      const topScroll = window.scrollY || document.documentElement.topScroll;
      setIsScrolledDown(topScroll > 0)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
   }, [])

  return (
    <NavContainer  scrolledDown ={ isScrolledDown}>
      <HomeLinksWrapper>
        <LogoLink to="/">
        <Logo src="https://cdn.discordapp.com/attachments/899929905318486046/1094149965976174672/CryptoPluie_Billy_Nguyen_Logo.png" alt="logo"/>
        </LogoLink>
        <TitleLink>
      <MainTitle>CryptoPluie</MainTitle>
      </TitleLink>
      </HomeLinksWrapper>
      <NavigationLinksWrapper>
      <CoinsLink to="/coins">Coins</CoinsLink>
      <PortfolioLink to="/portfolio">Portfolio</PortfolioLink>
      <AboutLink to= "/about">About</AboutLink>
      </NavigationLinksWrapper>
      <SignUpButton>Login</SignUpButton>
    </NavContainer>
  );
};

export default Navbar;
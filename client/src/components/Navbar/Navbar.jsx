import {
  NavContainer,
  MainTitle,
  HomeLinksWrapper,
  Logo,
  NavigationLinksWrapper,
  TitleLink,
  LogoLink,
  CoinsLink,
  PortfolioLink,
  AboutLink,
} from "./NavbarStyles";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const topScroll = window.scrollY || document.documentElement.topScroll;
      setIsScrolledDown(topScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isAuthenticated);

  const isHomePage = location.pathname === "/";


  return (
    <NavContainer scrolledDown={isScrolledDown} isHomePage={isHomePage}>
      <HomeLinksWrapper >
        <LogoLink to="/">
          <Logo
            src="https://cdn.discordapp.com/attachments/899929905318486046/1094149965976174672/CryptoPluie_Billy_Nguyen_Logo.png"
            alt="logo"
          />
        </LogoLink>
        <TitleLink>
          <MainTitle>CryptoPluie</MainTitle>
        </TitleLink>
      </HomeLinksWrapper>
      <NavigationLinksWrapper>
        <CoinsLink to="/coins">Coins</CoinsLink>
        {isAuthenticated && (
          <PortfolioLink to="/portfolio">Portfolio</PortfolioLink>
        )}
        <AboutLink to="/community">Community</AboutLink>
      </NavigationLinksWrapper>
      {isHomePage ? null : <SearchBar/>}
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </NavContainer>
  );
};

export default Navbar;

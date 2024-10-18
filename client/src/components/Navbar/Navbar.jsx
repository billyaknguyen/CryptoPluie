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
  LeaderBoardLink,
  SuggestionsLink,
  AuthContainer,
  UserContainer,
  UserImage,
  MenuButton,
  HamburgerIcon,
  SearchBarContainer
} from "./NavbarStyles";
import MenuModal from "./MenuModal";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
  const location = useLocation();

  const menuToggle = () => {
    setIsMenuBarOpen(!isMenuBarOpen)
  }

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

  const isHomePage = location.pathname === "/";

  return (
    <NavContainer scrolledDown={isScrolledDown} isHomePage={isHomePage}>
      <HomeLinksWrapper>
      <MenuButton onClick={menuToggle}>
            <HamburgerIcon/>
          </MenuButton>
        <LogoLink to="/">
          <Logo
            src="https://cdn.discordapp.com/attachments/899929905318486046/1296712589644009493/CryptoPluie_Billy_Nguyen_Logo.png?ex=67134935&is=6711f7b5&hm=cf46c6c72e97c283b4597f1b46b23fdf60bb67ccc9f9d8bf8948a8b932900b6f&"
            alt="logo"
          />
        </LogoLink>
        <TitleLink to="/">
          <MainTitle>CryptoPluie</MainTitle>
        </TitleLink>
      </HomeLinksWrapper>
      <MenuModal isOpen={isMenuBarOpen} onClose={() => setIsMenuBarOpen(false)} isAuthenticated= {isAuthenticated}/>
      <NavigationLinksWrapper>
        <CoinsLink isHomePage={isHomePage} to="/coins">Coins</CoinsLink>
        {isAuthenticated && (
          <>
            <PortfolioLink isHomePage={isHomePage} to="/portfolio">Portfolio</PortfolioLink>
            <SuggestionsLink isHomePage={isHomePage} to="/suggestions">Suggestions</SuggestionsLink>
          </>
        )}
        <LeaderBoardLink isHomePage={isHomePage} to="/leaderboard">Leaderboard</LeaderBoardLink>
      </NavigationLinksWrapper>
      <SearchBarContainer>
      {isHomePage ? null : <SearchBar />}
      </SearchBarContainer>
      {!isAuthenticated ? (
        <AuthContainer>
          <LoginButton />
        </AuthContainer>
      ) : (
        <AuthContainer>
          <UserContainer>
            <UserImage
              src={user.picture}
              referrerpolicy="no-referrer"
            ></UserImage>
          </UserContainer>
          <LogoutButton />
        </AuthContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;

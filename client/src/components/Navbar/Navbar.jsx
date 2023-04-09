import { NavContainer, MainTitle, SignUpButton, HomeLinksWrapper, Logo, NavigationLinksWrapper, TitleLink, LogoLink, CoinsLink, PortfolioLink, AboutLink} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
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
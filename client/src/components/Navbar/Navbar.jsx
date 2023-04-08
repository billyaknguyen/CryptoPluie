import { NavContainer, MainTitle, SignUpButton, HomeLinksWrapper, Logo, NavigationLinksWrapper, TitleLink, LogoLink, CoinsLink, LinksWrapper} from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
      <LinksWrapper>
      <HomeLinksWrapper>
        <LogoLink to="/">
        <Logo src="https://cdn.discordapp.com/attachments/899929905318486046/1094145054467162162/new_logo_2.png" alt="logo"/>
        </LogoLink>
        <TitleLink>
      <MainTitle>CryptoPluie</MainTitle>
      </TitleLink>
      </HomeLinksWrapper>
      <NavigationLinksWrapper>
      <CoinsLink to="/coins">Coins</CoinsLink>
      </NavigationLinksWrapper>
      </LinksWrapper>
      <SignUpButton>Login</SignUpButton>
    </NavContainer>
  );
};

export default Navbar;
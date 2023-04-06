import { NavContainer, MainTitle, SignUpButton, HomeLinks, Logo } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavContainer>
      <HomeLinks>
        <Logo src="https://cdn.discordapp.com/attachments/899929905318486046/1093446206392369203/pluiecrypto_logo.png" alt="logo"/>
      <MainTitle>PluieCrypto</MainTitle>
      </HomeLinks>
      <SignUpButton>Login</SignUpButton>
    </NavContainer>
  );
};

export default Navbar;
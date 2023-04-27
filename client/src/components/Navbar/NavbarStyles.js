import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  border: 1px solid yellow;
  background-color: ${(props) =>
    props.scrolledDown || !props.isHomePage ? "#85a7c0" : "transparent"};
  z-index: 1;
`;

export const MainTitle = styled.h1`
  font-size: 1.5rem;

  letter-spacing: 3px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  
`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const LogoLink = styled(NavLink)``;

export const CoinsLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  font-size: 1.5rem;
  font-weight: bold;
  
`;
export const PortfolioLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const AboutLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HomeLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  border: 3px solid purple;
`;

export const NavigationLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  border: 2px solid black;
`;

export const SignUpButton = styled.button`
  margin-right: 1rem;
`;

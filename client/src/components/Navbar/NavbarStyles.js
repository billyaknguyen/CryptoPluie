import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const MainTitle = styled.h1`
  /* margin-left: 2rem; */
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 200px;
  width: 200px;
`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const LogoLink = styled(NavLink)``;

export const CoinsLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px solid brown;
`;
export const HomeLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  /* border: 3px solid purple; */
`;

export const NavigationLinksWrapper = styled.div`
  display: flex;
`;

export const SignUpButton = styled.button`
  margin-right: 1rem;
`;

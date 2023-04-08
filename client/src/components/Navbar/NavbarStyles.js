import styled from "styled-components";
import { NavLink } from "react-router-dom";
import WaveNav from "./wavenav.svg";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  background-image: url(${WaveNav});
  /* border: 1px solid yellow; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const MainTitle = styled.h1`
  margin-left: 2rem;
  font-size: 2.5rem;
  letter-spacing: 3px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 120px;
  width: 120px;
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
  /* border: 3px solid brown; */
  align-items: center;
  justify-content: center;
  gap: 20px;
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
  border: 3px solid green;
`;

export const SignUpButton = styled.button`
  margin-right: 1rem;
`;

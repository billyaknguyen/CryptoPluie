import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
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
  padding: 5px;
  font-size: 1.5rem;
  font-weight: bold;

  &.active {
    background-color: #f0f0f0;
    color: black;
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  &:hover {
    background-color: rgb(210, 210, 210);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  
`;
export const PortfolioLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  padding: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  &.active {
    background-color: #f0f0f0;
    color: black;
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  &:hover {
    background-color: rgb(210, 210, 210);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;
export const LeaderBoardLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  padding: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  &.active {
    background-color: #f0f0f0;
    color: black;
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  &:hover {
    background-color: rgb(210, 210, 210);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;

export const HomeLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const AuthContainer = styled.div `
display: flex;
height: 50px;
gap: 10px;
color: #f1fafc;
`

export const UserImage = styled.img `
height: 50px;
width: 50px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
`

export const UserContainer = styled.div `
`

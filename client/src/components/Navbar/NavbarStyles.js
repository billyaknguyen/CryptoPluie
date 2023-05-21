import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IconMenu2 } from '@tabler/icons-react';

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${(props) =>
    props.scrolledDown || !props.isHomePage
      ? `
      linear-gradient(to left,#292e49, #163f61);`
      : "transparent"};
  z-index: 1;
`

export const MainTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;

  @media (max-width: 1170px) {
    display: none;
  }
`;

export const Logo = styled.img`
width: 100px;
height: 100px;

`;

export const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const LogoLink = styled(NavLink)`

`;

export const CoinsLink = styled(NavLink)`
  text-decoration: none;
  color: #F2FAFC;
  padding: 5px;
  font-size: ${(props) => props.isHomePage ? "1.3em" : "1em"};
  font-weight: bold;

  &.active {
    background-color:  rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  @media (min-width: 1052px) {
    font-size: 1.5em;
  }
  
`;
export const PortfolioLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  padding: 5px;
  font-size: ${(props) => props.isHomePage ? "1.3em" : "1em"};
  font-weight: bold;
  &.active {
    background-color:  rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }
  @media (min-width: 1052px) {
    font-size: 1.5em;
  }
`;
export const LeaderBoardLink = styled(NavLink)`
  text-decoration: none;
  color: #f1fafc;
  padding: 5px;
  font-size: ${(props) => props.isHomePage ? "1.3em" : "1em"};
  font-weight: bold;
  &.active {
    background-color:  rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }
  @media (min-width: 1052px) {
    font-size: 1.5em;
  }
`;

export const SuggestionsLink = styled(NavLink) `
  text-decoration: none;
  color: #f1fafc;
  padding: 5px;
  font-size: ${(props) => props.isHomePage ? "1.3em" : "1em"};
  font-weight: bold;
  &.active {
    background-color:  rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px
  }

  @media (min-width: 1052px) {
    font-size: 1.5em;
  }
`;


export const HomeLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationLinksWrapper = styled.div`
  display: none;

  @media (min-width: 810px) {
  display: flex;
  margin-right: 10px;
  gap: 20px;
  
  }
`;

export const AuthContainer = styled.div `
display: flex;
margin-right: 10px;
height: 50px;
gap: 10px;
color: #f1fafc;
`

export const UserImage = styled.img `
height: 40px;
width: 40px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
`

export const UserContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
`

export const MenuButton = styled.button `
color: #f1fafc;
cursor: pointer;
border: none;
background-color: transparent;

@media (min-width: 810px) {
  display: none;
  }
`

export const HamburgerIcon = styled(IconMenu2) `
width: 32px;
height: 32px;
color: white;

&:hover {
 color: grey;
}

`

export const SearchBarContainer = styled.div`
  @media (max-width: 495px) {
    display: none;
  }
`;
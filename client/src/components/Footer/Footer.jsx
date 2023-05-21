import styled from "styled-components"
import { Link } from "react-router-dom"
import { IconBrandGithub } from '@tabler/icons-react';
const Footer = () => {
    return (
     <>
     <FooterContainer>
         <GitHubLink to={"https://github.com/billyaknguyen/CryptoPluie"}><GitHubIcon/> github</GitHubLink>
         <FooterText>Made by Billy Nguyen</FooterText>
         <FooterText>© {new Date().getFullYear()} CryptoPluie. All rights reserved.</FooterText>
     </FooterContainer>
     </>
    )
 }
 
 const FooterContainer = styled.div `
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin-top: 50px;
 padding-left: 10px;
 min-height: 100px;
 background: linear-gradient(to left,#292e49, #163f61);

 @media (min-width: 800px) {
   margin-top: 0;
   padding-left: 0;
  }
 `
 const FooterText = styled.p `
     font-size: 0.8em;
     color: #DBECFF;
     text-align: center;
     @media (min-width: 800px) {
 font-size: 1em;
  }
 `

 const GitHubLink = styled(Link) `
    color: white;
    text-decoration: none;

 `

 const GitHubIcon = styled(IconBrandGithub) `
    width: 48px;
    height: 48px;

    &:hover {
        color: #DBECFF;
    }
 `

 export default Footer
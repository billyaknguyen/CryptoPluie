import styled from "styled-components"
import { Link } from "react-router-dom"
import { IconBrandGithub } from '@tabler/icons-react';
const Footer = () => {
    return (
     <>
     <FooterContainer>
         <GitHubLink to={"https://github.com/billyaknguyen/CryptoPluie"}><GitHubIcon/> github</GitHubLink>
         <FooterText>© {new Date().getFullYear()} CryptoPluie. All rights reserved.</FooterText>
     </FooterContainer>
     </>
    )
 }
 
 const FooterContainer = styled.div `
 display: flex;
 align-items: center;
 justify-content: space-around;
 min-height: 100px;
 background: linear-gradient(to left,#292e49, #163f61);
 `
 const FooterText = styled.p `
     font-size: 1rem;
     color: #DBECFF;
     text-align: center;
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
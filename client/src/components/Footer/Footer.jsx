import styled from "styled-components"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
     <>
     <FooterContainer>
         <FooterText>© {new Date().getFullYear()} CryptoPluie. All rights reserved.</FooterText>
     </FooterContainer>
     </>
    )
 }
 
 const FooterContainer = styled.div `
 display: flex;
 min-height: 100px;
 background: linear-gradient(to left,#292e49, #163f61);
 `
 const FooterText = styled.p `
     font-size: 1rem;
     color: #DBECFF;
     text-align: center;
 `

 const GitHubLink = styled(Link) `
    

 `

 export default Footer
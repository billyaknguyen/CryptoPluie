import styled from "styled-components"
import { Wave } from "../Home/HomepageStyles"
const Footer = () => {
   return (
    <>
    <Wave/>
    <FooterContainer>
    </FooterContainer>
    </>
   )
}

const FooterContainer = styled.div `
    min-height: 200px;
    background-color: #f1fafc;
    display: flex;
`

export default Footer
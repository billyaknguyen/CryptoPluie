import styled from "styled-components"
import { CoinsLink, PortfolioLink, SuggestionsLink, LeaderBoardLink } from "./NavbarStyles";


const MenuModal = ({isOpen, onClose, isAuthenticated}) => {
    if (!isOpen) return null;

    const closeModal = () => {
       onClose()
    }

    return (
        <ModalContainer>
          <ModalContent>
          <CoinsLink to="/coins" onClick={closeModal}>Coins</CoinsLink>
        {isAuthenticated && (
          <>
            <PortfolioLink to="/portfolio" onClick={closeModal}>Portfolio</PortfolioLink>
            <SuggestionsLink to="/suggestions" onClick={closeModal}>Suggestions</SuggestionsLink>
          </>
        )}
        <LeaderBoardLink to="/leaderboard" onClick={closeModal}>Leaderboard</LeaderBoardLink>
            </ModalContent>
        </ModalContainer>
    )
}



const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
 background: linear-gradient(to left,#292e49, #163f61);
 z-index: -1;

 
@media (min-width: 810px) {
  display: none;
}
`;


const ModalContent = styled.div`
display: flex;
margin-top: 100px;
width: 300px;
flex-direction: column;

@media (min-width: 598px) {
  
}

@media (min-width: 731px) {
  
}
@media (min-width: 810px) {
  display: none;
}
`;


export default MenuModal;
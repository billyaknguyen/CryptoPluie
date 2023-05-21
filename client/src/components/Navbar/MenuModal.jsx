import styled from "styled-components"
import { CoinsLink, PortfolioLink, SuggestionsLink, LeaderBoardLink } from "./NavbarStyles";
import SearchBar from "../SearchBar/SearchBar"


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
        <SearchBarContainer>
        <SearchBar closeModal = {closeModal}/>
        </SearchBarContainer>
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
flex-direction: column;
gap: 20px;
margin-top: 100px;
margin-left: 10px;
width: 300px;
height: 300px;

@media (min-width: 810px) {
  display: none;
}
`;

const SearchBarContainer = styled.div`
  @media (min-width: 495px) {
    display: none;
  }

`


export default MenuModal;
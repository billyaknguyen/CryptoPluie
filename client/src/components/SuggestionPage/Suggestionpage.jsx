import { useContext } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import { useAuth0 } from "@auth0/auth0-react";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import { handleAcceptSuggestion, handleDeclineSuggestion, handleDeleteSuggestion, handleDeleteSuggestionHistory } from "../utils/suggestionHandlers";
import {SuggestionPageContainer, SectionTitle, SuggestionWrapper, SuggestionCard, SuggestionImage, SuggestionText, SuggestionButton, SuggestionCoinContainer, SuggestionCoinImage} from "./SuggestionpageStyles"
import priceFormatter from "../utils/priceFormatter"

const SuggestionPage = () => {
  const { state, actions: { updateUserPortfolio } } = useContext(UserPortfolioContext);
  const { user } = useAuth0();


  console.log(state);
  return (
    <SuggestionPageContainer>
      <SectionTitle>PENDING SUGGESTIONS</SectionTitle>
      <SuggestionWrapper>
      {state.pendingSuggestions.length === 0 ? (
        <SuggestionText>You do not have any pending suggestions at the moment.</SuggestionText>
      ) : (
        state.pendingSuggestions.map((pendingSuggestion, index) => {
          return (
            <SuggestionCard key={index}>
              <SuggestionText>{pendingSuggestion.sender.sender_name}</SuggestionText>
              <SuggestionImage
                src={pendingSuggestion.sender.sender_picture}
              />
              <SuggestionButton onClick={() => handleAcceptSuggestion(user, pendingSuggestion, fetchUserPortfolio, updateUserPortfolio)}>
                Accept
              </SuggestionButton>
              <SuggestionButton
                onClick={() => handleDeclineSuggestion(user, pendingSuggestion, fetchUserPortfolio, updateUserPortfolio)}
              >
                Decline
              </SuggestionButton>
            </SuggestionCard>
          );
        })
      )}
      </SuggestionWrapper>
      <SectionTitle>ACCEPTED SUGGESTIONS</SectionTitle>
      <SuggestionWrapper>
      {state.suggestions.length === 0 ? (
        <SuggestionText> You do not have any suggestions at the moment.</SuggestionText>
      ) : (
        state.suggestions.map((suggestion, index) => {
          return (
            <SuggestionCard key={index}>
              <SuggestionText >
              {suggestion.sender.sender_name}
              </SuggestionText>
              <SuggestionImage
                src={suggestion.sender.sender_picture}
              />
              <SuggestionCoinContainer to={`/coin/${suggestion.coin_id}`}>
              <SuggestionCoinImage src={suggestion.coin_image}/>
              <SuggestionText>{suggestion.coin_name}</SuggestionText>
              </SuggestionCoinContainer>
              <SuggestionText>{priceFormatter(suggestion.coin_price)}</SuggestionText>
              <SuggestionText>{suggestion.message}</SuggestionText>
              <SuggestionText>{suggestion.messageDate}</SuggestionText>
              <SuggestionButton onClick={() => handleDeleteSuggestion(user, suggestion, fetchUserPortfolio, updateUserPortfolio)}>Delete</SuggestionButton>
            </SuggestionCard>
          );
        })
      )}
      </SuggestionWrapper>
      <SectionTitle>SUGGESTION HISTORY</SectionTitle>
      <SuggestionWrapper>
      {state.suggestionHistory.length === 0 ? (
        <SuggestionText>You do not have any suggestion history at the moment.</SuggestionText>
      ) : (
        state.suggestionHistory.map((historyItem, index) => {
          return (
            <SuggestionCard key={index}>
              <SuggestionText>Sent to {historyItem.receiver.receiver_name}</SuggestionText>
              <SuggestionImage
                src={historyItem.receiver.receiver_picture}
              />
               <SuggestionCoinContainer to={`/coin/${historyItem.coin_id}`}>
                <SuggestionCoinImage src={historyItem.coin_image}/>
              <SuggestionText>{historyItem.coin_name}</SuggestionText>
              </SuggestionCoinContainer>
              <SuggestionText>{priceFormatter(historyItem.coin_price)}</SuggestionText>
              <SuggestionText>{historyItem.message}</SuggestionText>
              <SuggestionText>Status: {historyItem.status}</SuggestionText>
              <SuggestionButton onClick={() => handleDeleteSuggestionHistory(user, historyItem, fetchUserPortfolio, updateUserPortfolio)}>Delete</SuggestionButton>
            </SuggestionCard>
          );
        })
      )}
      </SuggestionWrapper>
    </SuggestionPageContainer>
  );
};

export default SuggestionPage;

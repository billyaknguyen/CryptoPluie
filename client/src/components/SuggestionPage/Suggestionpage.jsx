import { useContext } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import { useAuth0 } from "@auth0/auth0-react";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import {
  handleAcceptSuggestion,
  handleDeclineSuggestion,
  handleDeleteSuggestion,
  handleDeleteSuggestionHistory,
} from "../utils/suggestionHandlers";
import {
  SuggestionPageContainer,
  SectionTitle,
  SuggestionWrapper,
  SuggestionCard,
  SuggestionImage,
  SuggestionTitle,
  SuggestionText,
  AcceptButton,
  DenyButton,
  NoSuggestionText,
  SuggestionCoinContainer,
  SuggestionContentContainer,
  SuggestionContainer,
  SuggestionCoinImage,
  SuggestionPageTitle,
  ProfileContainer,
  CoinContainer,
  MessageContainer,
  DateContainer,
  StatusContainer,
} from "./SuggestionpageStyles";
import priceFormatter from "../utils/priceFormatter";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import Error from "../Error/Error";

const SuggestionPage = () => {
  const {
    state,
    loadingHolding,
    errorHolding,
    actions: { updateUserPortfolio },
  } = useContext(UserPortfolioContext);
  const { user } = useAuth0();
  const [clickedPending, setClickedPending] = useState(null);
  const [clickedSuggestion, setClickedSuggestion] = useState(null);
  const [clickedHistory, setClickedHistory] = useState(null);

  if (errorHolding) {
    return <Error />;
  }
  if (loadingHolding) {
    return <LoadingSpinner />;
  }

  return (
    <SuggestionPageContainer>
      <SuggestionPageTitle>My Suggestions</SuggestionPageTitle>
      <SuggestionContainer>
        <SuggestionWrapper>
          <SectionTitle>Pending</SectionTitle>
          <SuggestionContentContainer>
            {state.pendingSuggestions.length === 0 ? (
              <NoSuggestionText>
                You do not have any pending suggestions at the moment.
              </NoSuggestionText>
            ) : (
              state.pendingSuggestions.map((pendingSuggestion, index) => {
                return (
                  <SuggestionCard key={index}>
                    <ProfileContainer>
                      <SuggestionTitle>Sender:</SuggestionTitle>
                      <SuggestionText>
                        {pendingSuggestion.sender.sender_name}
                      </SuggestionText>
                      <SuggestionImage
                        src={pendingSuggestion.sender.sender_picture}
                      />
                    </ProfileContainer>
                    <AcceptButton
                      onClick={() => {
                        handleAcceptSuggestion(
                          user,
                          pendingSuggestion,
                          fetchUserPortfolio,
                          updateUserPortfolio
                        ),
                          setClickedPending(pendingSuggestion._id);
                      }}
                      disabled={clickedPending === pendingSuggestion._id}
                    >
                      Accept
                    </AcceptButton>
                    <DenyButton
                      onClick={() =>
                        handleDeclineSuggestion(
                          user,
                          pendingSuggestion,
                          fetchUserPortfolio,
                          updateUserPortfolio
                        )
                      }
                      disabled={clickedPending === pendingSuggestion._id}
                    >
                      Decline
                    </DenyButton>
                  </SuggestionCard>
                );
              })
            )}
          </SuggestionContentContainer>
        </SuggestionWrapper>
        <SuggestionWrapper>
          <SectionTitle>Accepted</SectionTitle>
          <SuggestionContentContainer>
            {state.suggestions.length === 0 ? (
              <NoSuggestionText>
                You do not have any suggestions at the moment.
              </NoSuggestionText>
            ) : (
              state.suggestions.map((suggestion, index) => {
                return (
                  <SuggestionCard key={index}>
                    <ProfileContainer>
                      <SuggestionTitle>Sender:</SuggestionTitle>
                      <SuggestionImage src={suggestion.sender.sender_picture} />
                      <SuggestionText>
                        {suggestion.sender.sender_name}
                      </SuggestionText>
                    </ProfileContainer>
                    <CoinContainer>
                      <SuggestionCoinContainer
                        to={`/coin/${suggestion.coin_id}`}
                      >
                        <SuggestionTitle>Coin:</SuggestionTitle>
                        <SuggestionCoinImage src={suggestion.coin_image} />
                        <SuggestionTitle>
                          {suggestion.coin_name}:
                        </SuggestionTitle>
                      </SuggestionCoinContainer>
                      <SuggestionText>
                        {priceFormatter(suggestion.coin_price)}
                      </SuggestionText>
                    </CoinContainer>
                    <MessageContainer>
                      <SuggestionTitle> Message:</SuggestionTitle>
                      <SuggestionText>{suggestion.message}</SuggestionText>
                    </MessageContainer>
                    <DateContainer>
                      <SuggestionTitle>Date:</SuggestionTitle>
                      <SuggestionText>{suggestion.messageDate}</SuggestionText>
                    </DateContainer>
                    <DenyButton
                      onClick={() => {
                        handleDeleteSuggestion(
                          user,
                          suggestion,
                          fetchUserPortfolio,
                          updateUserPortfolio
                        ),
                          setClickedSuggestion(suggestion._id);
                      }}
                      disabled={clickedSuggestion === suggestion._id}
                    >
                      Delete
                    </DenyButton>
                  </SuggestionCard>
                );
              })
            )}
          </SuggestionContentContainer>
        </SuggestionWrapper>
        <SuggestionWrapper>
          <SectionTitle>Sent</SectionTitle>
          <SuggestionContentContainer>
            {state.suggestionHistory.length === 0 ? (
              <NoSuggestionText>Nothing has been sent yet.</NoSuggestionText>
            ) : (
              state.suggestionHistory.map((historyItem, index) => {
                return (
                  <SuggestionCard key={index}>
                    <ProfileContainer>
                      <SuggestionTitle>Receiver:</SuggestionTitle>
                      <SuggestionImage
                        src={historyItem.receiver.receiver_picture}
                      />
                      <SuggestionText>
                        {historyItem.receiver.receiver_name}
                      </SuggestionText>
                    </ProfileContainer>
                    <CoinContainer>
                      <SuggestionCoinContainer
                        to={`/coin/${historyItem.coin_id}`}
                      >
                        <SuggestionTitle>Coin:</SuggestionTitle>
                        <SuggestionCoinImage src={historyItem.coin_image} />
                        <SuggestionTitle>
                          {historyItem.coin_name}
                        </SuggestionTitle>
                      </SuggestionCoinContainer>
                      <SuggestionText>
                        {priceFormatter(historyItem.coin_price)}
                      </SuggestionText>
                    </CoinContainer>
                    <MessageContainer>
                      <SuggestionTitle>Message:</SuggestionTitle>
                      <SuggestionText>{historyItem.message}</SuggestionText>
                    </MessageContainer>
                    <StatusContainer>
                      <SuggestionTitle>Status:</SuggestionTitle>
                      <SuggestionText>{historyItem.status}</SuggestionText>
                    </StatusContainer>
                    <DenyButton
                      onClick={() => {
                        handleDeleteSuggestionHistory(
                          user,
                          historyItem,
                          fetchUserPortfolio,
                          updateUserPortfolio
                        ),
                          setClickedHistory(historyItem._id);
                      }}
                      disabled={clickedHistory === historyItem._id}
                    >
                      Delete
                    </DenyButton>
                  </SuggestionCard>
                );
              })
            )}
          </SuggestionContentContainer>
        </SuggestionWrapper>
      </SuggestionContainer>
    </SuggestionPageContainer>
  );
};

export default SuggestionPage;

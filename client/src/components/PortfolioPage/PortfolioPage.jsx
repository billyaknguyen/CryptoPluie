import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/Modal";
import priceFormatter from "../utils/priceFormatter";
import addNewCoin from "../utils/addNewCoin";
import sellCoin from "../utils/sellCoin";
import addCoinHandle from "../hooks/addCoinHandle";
import sellCoinHandle from "../hooks/sellCoinHandle";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import { useNavigate } from "react-router-dom";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import {
  PortfolioPageContainer,
  PortfolioPageWrapper,
  InformationContainer,
  PortfolioTable,
  PortfolioTableRow,
  PortfolioTableProfit,
  PortfolioTableCoinData,
  PortfolioTableData,
  PortfolioTableHead,
  BuyButton,
  SellButton,
  ProfileContainer,
  PortfolioStatsContainer,
  PortfolioTableContainer,
  CoinImg,
  CoinName,
  CoinWrapper,
  ColumnContainer,
  GeneralTitle,
  GeneralItem,
  PendingSuggestionItem,
  SuggestionButton,
  PlusSign,
  EqualSign,
  Title
} from "./PortfolioPageStyles";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PortfolioPage = () => {
  const {
    state,
    coins,
    loadingHolding,
    loadingCoin,
    actions: { updateUserPortfolio },
  } = useContext(UserPortfolioContext);
  const { user } = useAuth0();
  const [openModal, setOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const navigate = useNavigate();

  const buyHandle = (quantity) => {
    addCoinHandle(
      user,
      selectedCoin,
      quantity,
      fetchUserPortfolio,
      updateUserPortfolio,
      addNewCoin
    );
  };

  const sellHandle = (quantity) => {
    sellCoinHandle(
      user,
      selectedCoin,
      quantity,
      fetchUserPortfolio,
      updateUserPortfolio,
      sellCoin
    );
  };

  const buyModalOption = (coin) => {
    setSelectedCoin(coin);
    setModalAction("buy");
    setOpenModal(true);
  };

  const sellModalOption = (coin) => {
    setSelectedCoin(coin);
    setModalAction("sell");
    setOpenModal(true);
  };

  if (loadingHolding || loadingCoin) {
    return <LoadingSpinner />;
  }

  console.log(state.suggestions);

  const portfolioValue = state.holdings.reduce((total, holding) => {
    const coin = coins.find((coin) => coin.id === holding.coin_id);
    const currentPrice = coin ? coin.current_price : 0;
    const marketValue = holding.coin_quantity * currentPrice;
    return total + marketValue;
  }, 0);
  const netWorth = portfolioValue + state.balance;

  return (
    <PortfolioPageWrapper>
      <Title>My Portfolio</Title>
      <InformationContainer>
        <ProfileContainer>
          <ColumnContainer>
            <GeneralTitle>Suggestions</GeneralTitle>
            <SuggestionButton onClick={() => navigate("/suggestions")}>{state.suggestions.length}</SuggestionButton>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>Pending Suggestions
            </GeneralTitle>
            <PendingSuggestionItem onClick={() => navigate("/suggestions")} animated={state.pendingSuggestions.length > 0}>{state.pendingSuggestions.length}</PendingSuggestionItem>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>Suggestions Sent</GeneralTitle>
            <SuggestionButton onClick={() => navigate("/suggestions")}>{state.suggestionHistory.length}</SuggestionButton>
          </ColumnContainer>
        </ProfileContainer>
        <PortfolioStatsContainer>
          <ColumnContainer>
            <GeneralTitle>Current Balance</GeneralTitle>
            <GeneralItem>{priceFormatter(state.balance)}</GeneralItem>
          </ColumnContainer>
          <PlusSign />
          <ColumnContainer>
            <GeneralTitle>Portfolio Value</GeneralTitle>
            <GeneralItem>{priceFormatter(portfolioValue)} </GeneralItem>
          </ColumnContainer>
          <EqualSign />
          <ColumnContainer>
            <GeneralTitle>Net Worth</GeneralTitle>{" "}
            <GeneralItem>{priceFormatter(netWorth)} </GeneralItem>
          </ColumnContainer>
        </PortfolioStatsContainer>
      </InformationContainer>
      <PortfolioPageContainer>
        <PortfolioTableContainer>
          <PortfolioTable>
            <thead>
              <PortfolioTableRow>
                <PortfolioTableHead>Coin</PortfolioTableHead>
                <PortfolioTableHead>Symbol</PortfolioTableHead>
                <PortfolioTableHead>Current Price</PortfolioTableHead>
                <PortfolioTableHead>Quantity</PortfolioTableHead>
                <PortfolioTableHead>Average Price</PortfolioTableHead>
                <PortfolioTableHead>Cost Basis</PortfolioTableHead>
                <PortfolioTableHead>Market Value</PortfolioTableHead>
                <PortfolioTableHead>P/L</PortfolioTableHead>
              </PortfolioTableRow>
            </thead>
            <tbody>
              {state.holdings.map((holding) => {
                const coin = coins.find((coin) => coin.id === holding.coin_id);
                const currentPrice = coin ? coin.current_price : 0;
                const marketValue = holding.coin_quantity * currentPrice;
                const profit = marketValue - holding.coin_costBasis;

                return (
                  <PortfolioTableRow key={holding.coin_id}>
                    <PortfolioTableCoinData>
                      <CoinWrapper onClick={() => navigate(`/coin/${coin.id}`)}>
                        <CoinImg src={holding.coin_image}></CoinImg>
                        <CoinName> {holding.coin_name}</CoinName>
                      </CoinWrapper>
                    </PortfolioTableCoinData>

                    <PortfolioTableData>
                      {holding.coin_symbol.toUpperCase()}
                    </PortfolioTableData>
                    <PortfolioTableData>
                      {priceFormatter(currentPrice)}
                    </PortfolioTableData>
                    <PortfolioTableData>
                      {holding.coin_quantity.toFixed(8)}
                    </PortfolioTableData>
                    <PortfolioTableData>
                      {priceFormatter(holding.coin_averagePrice)}
                    </PortfolioTableData>
                    <PortfolioTableData>
                      {priceFormatter(holding.coin_costBasis)}
                    </PortfolioTableData>
                    <PortfolioTableData>
                      {priceFormatter(marketValue)}
                    </PortfolioTableData>
                    <PortfolioTableProfit profit={profit}>
                      {priceFormatter(profit)}
                    </PortfolioTableProfit>
                    <PortfolioTableData>
                      <BuyButton onClick={() => buyModalOption(coin)}>
                        Buy
                      </BuyButton>
                      <SellButton onClick={() => sellModalOption(coin)}>
                        Sell
                      </SellButton>
                    </PortfolioTableData>
                  </PortfolioTableRow>
                );
              })}
            </tbody>
          </PortfolioTable>
        </PortfolioTableContainer>
      </PortfolioPageContainer>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modalAction={modalAction}
        onBuyHandle={buyHandle}
        onSellHandle={sellHandle}
        singleCoin={selectedCoin}
        holdings={state.holdings}
        balance={state.balance}
      />
    </PortfolioPageWrapper>
  );
};

export default PortfolioPage;

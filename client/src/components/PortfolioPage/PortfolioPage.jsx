import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/Modal";
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
  CoinImg,
  CoinName,
  CoinWrapper,
} from "./PortfolioPageStyles";

const PortfolioPage = () => {
  const {
    state,
    coins,
    loadingHolding,
    loadingCoin,
    actions: { updateUserPortfolio },
  } = useContext(UserPortfolioContext);
  const { user, isAuthenticated } = useAuth0();
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
    return <div>loading...</div>;
  }

  const portfolioValue = state.holdings.reduce((total, holding) => {
    const coin = coins.find((coin) => coin.id === holding.coin_id);
    const currentPrice = coin ? coin.current_price : 0;
    const marketValue = holding.coin_quantity * currentPrice;
    return total + marketValue;
  }, 0);

  return (
    <PortfolioPageWrapper>
      <InformationContainer>
        <ProfileContainer>
          <div> User: {user.nickname}</div>
        </ProfileContainer>
        <PortfolioStatsContainer>
          <div>Current Balance:${state.balance.toFixed(2)}</div>
          <div>Portfolio Value:${portfolioValue.toFixed(2)}</div>
        </PortfolioStatsContainer>
      </InformationContainer>
      <PortfolioPageContainer>
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
                    ${currentPrice.toFixed(2)}
                  </PortfolioTableData>
                  <PortfolioTableData>
                    {holding.coin_quantity.toFixed(8)}
                  </PortfolioTableData>
                  <PortfolioTableData>
                    ${holding.coin_averagePrice.toFixed(2)}
                  </PortfolioTableData>
                  <PortfolioTableData>
                    ${holding.coin_costBasis.toFixed(2)}
                  </PortfolioTableData>
                  <PortfolioTableData>
                    ${marketValue.toFixed(2)}
                  </PortfolioTableData>
                  <PortfolioTableProfit profit={profit}>
                    ${profit.toFixed(2)}
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

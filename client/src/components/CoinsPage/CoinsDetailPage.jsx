import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import addNewCoin from "../utils/addNewCoin";
import priceFormatter from "../utils/priceFormatter";
import decimalFormatter from "../utils/decimalFormatter";
import sellCoin from "../utils/sellCoin";
import addCoinHandle from "../hooks/addCoinHandle";
import sellCoinHandle from "../hooks/sellCoinHandle";
import suggestCoinHandle from "../utils/suggestCoinHandle";
import SuggestCoinModal from "../Modal/SuggestModal";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import CoinChart from "./CoinChart";
import {
  SingleCoinContainer,
  CoinPageDetailsContainer,
  ChartContainer,
  CoinContainer,
  CoinDetailsContainer,
  CoinInfoContainer,
  CoinName,
  CoinImg,
  CoinSymbol,
  CoinPrice,
  CoinPercentage,
  CoinPriceStatsContainer,
  CoinDayStatsContainer,
  CoinHighContainer,
  CoinLowContainer,
  PriceChangeContainer,
  ColumnContainer,
  CoinStatsContainer,
  CoinHigh,
  CoinLow,
  CoinHighTitle,
  CoinLowTitle,
  CoinLastUpdated,
  CoinPriceChange,
  CoinPriceTitle,
  CoinStatsTitle,
  GeneralTitle,
  GeneralItem,
  MiniCoinContainer,
  ButtonContainer,
  BuyButton,
  SellButton,
  SuggestButton,
  NotLoggedInText,
} from "./CoinsDetailPageStyles";

import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/Modal";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";

const CoinsDetailPage = () => {
  const [singleCoin, setSingleCoin] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [suggestModalOpen, setSuggestModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const {
    state,
    actions: { updateUserPortfolio },
  } = useContext(UserPortfolioContext);

  console.log(singleCoin);
  useEffect(() => {
    const getSpecificCoin = async () => {
      try {
        const response = await fetch(`/api/coin/${id}`);
        const resData = await response.json();
        setSingleCoin(resData.data);
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false)
        console.log(error);
      }
    };
    getSpecificCoin();
  }, [id]);

  const buyHandle = (quantity) => {
    addCoinHandle(
      user,
      singleCoin,
      quantity,
      fetchUserPortfolio,
      updateUserPortfolio,
      addNewCoin
    );
  };
  const sellHandle = (quantity) => {
    sellCoinHandle(
      user,
      singleCoin,
      quantity,
      fetchUserPortfolio,
      updateUserPortfolio,
      sellCoin
    );
  };

  const buyModalOption = () => {
    setModalAction("buy");
    setOpenModal(true);
  };

  const sellModalOption = () => {
    setModalAction("sell");
    setOpenModal(true);
  };

  const openSuggestModal = () => {
    setSuggestModalOpen(true);
  };

  const closeSuggestModal = () => {
    setSuggestModalOpen(false);
  };

  if (error) {
    return <Error/>
  }
  
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {singleCoin && (
        <CoinPageDetailsContainer>
          <SingleCoinContainer>
            <ChartContainer>
              <CoinChart singleCoin={singleCoin} />
            </ChartContainer>
            <CoinContainer>
              <CoinDetailsContainer>
                <CoinInfoContainer>
                  <MiniCoinContainer>
                    <CoinImg
                      src={singleCoin.image}
                      alt={`${singleCoin.name} picture`}
                    ></CoinImg>
                    <CoinName> {singleCoin.name}</CoinName>
                    <CoinSymbol>{singleCoin.symbol}</CoinSymbol>
                  </MiniCoinContainer>
                  <CoinLastUpdated>
                    last_updated:
                    {format(new Date(singleCoin.last_updated), "yyyy-MM-dd")}
                  </CoinLastUpdated>
                </CoinInfoContainer>

                <CoinPriceTitle>Price</CoinPriceTitle>
                <CoinPrice>
                  {singleCoin.current_price
                    ? priceFormatter(singleCoin.current_price)
                    : "N/A"}
                </CoinPrice>

                <CoinPriceStatsContainer>
                  <PriceChangeContainer>
                    <CoinPriceChange
                      isNegative={singleCoin.price_change_24h < 0}
                    >
                      {singleCoin.price_change_24h
                        ? priceFormatter(singleCoin.price_change_24h)
                        : "N/A"}
                    </CoinPriceChange>
                    <CoinPercentage
                      isNegative={singleCoin.price_change_percentage_24h < 0}
                    >
                      {singleCoin.price_change_percentage_24h
                        ? `(${singleCoin.price_change_percentage_24h.toFixed(
                            2
                          )}%)`
                        : "N/A"}
                    </CoinPercentage>
                  </PriceChangeContainer>
                  <CoinDayStatsContainer>
                    <CoinHighContainer>
                      <CoinHighTitle>24H High</CoinHighTitle>
                      <CoinHigh>
                        {singleCoin.high_24h
                          ? priceFormatter(singleCoin.high_24h)
                          : "N/A"}
                      </CoinHigh>
                    </CoinHighContainer>
                    <CoinLowContainer>
                      <CoinLowTitle>24H Low</CoinLowTitle>
                      <CoinLow>
                        {" "}
                        {singleCoin.low_24h
                          ? priceFormatter(singleCoin.low_24h)
                          : "N/A"}
                      </CoinLow>
                    </CoinLowContainer>
                  </CoinDayStatsContainer>
                </CoinPriceStatsContainer>

                <CoinStatsTitle>Coin stats</CoinStatsTitle>

                <CoinStatsContainer>
                  <ColumnContainer>
                    <GeneralTitle>Market Rank</GeneralTitle>
                    <GeneralItem>{singleCoin.market_cap_rank}</GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>Market Cap</GeneralTitle>
                    <GeneralItem>
                      {priceFormatter(singleCoin.market_cap)}
                    </GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>Total Volume</GeneralTitle>
                    <GeneralItem>
                      {decimalFormatter(singleCoin.total_volume)}
                    </GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>All Time High</GeneralTitle>
                    <GeneralItem>{priceFormatter(singleCoin.ath)}</GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>Total Supply</GeneralTitle>
                    {singleCoin.total_supply === null ? (
                      <GeneralItem>Unknown</GeneralItem>
                    ) : (
                      <GeneralItem>
                        {decimalFormatter(singleCoin.total_supply)}
                      </GeneralItem>
                    )}
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>Circulating Supply</GeneralTitle>
                    <GeneralItem>
                      {decimalFormatter(singleCoin.circulating_supply)}
                    </GeneralItem>
                  </ColumnContainer>
                </CoinStatsContainer>
              </CoinDetailsContainer>
              {isAuthenticated ? (
                <ButtonContainer>
                  <BuyButton onClick={buyModalOption}>Buy</BuyButton>
                  <SellButton onClick={sellModalOption}>Sell</SellButton>
                  <SuggestButton onClick={openSuggestModal}>
                    Suggest
                  </SuggestButton>
                </ButtonContainer>
              ) : (
                <NotLoggedInText>
                  User must be logged in to make a purchase
                </NotLoggedInText>
              )}
            </CoinContainer>
          </SingleCoinContainer>
        </CoinPageDetailsContainer>
      )}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modalAction={modalAction}
        onBuyHandle={buyHandle}
        onSellHandle={sellHandle}
        singleCoin={singleCoin}
        holdings={state.holdings}
        balance={state.balance}
      />
      <SuggestCoinModal
        isOpen={suggestModalOpen}
        onClose={closeSuggestModal}
        suggestCoinHandle={suggestCoinHandle}
        singleCoin={singleCoin}
        loggedInUserId={isAuthenticated ? user.sub : null}
        loggedInUsername={isAuthenticated ? user.nickname : null}
        loggedInImage={isAuthenticated ? user.picture : null}
        updateUserPortfolio={updateUserPortfolio}
        fetchUserPortfolio={fetchUserPortfolio}
      />
    </>
  );
};

export default CoinsDetailPage;

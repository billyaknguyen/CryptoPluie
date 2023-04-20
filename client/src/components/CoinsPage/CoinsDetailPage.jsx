import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import {format} from "date-fns"
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import addNewCoin from "../utils/addNewCoin"
import sellCoin from "../utils/sellCoin";
import addCoinHandle from "../hooks/addCoinHandle";
import sellCoinHandle from "../hooks/sellCoinHandle";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import {SingleCoinContainer, CoinPageDetailsContainer, ChartContainer, CoinContainer, CoinDetailsContainer,CoinInfoContainer, CoinName,CoinImg, CoinSymbol, CoinPrice, CoinPercentage, CoinPriceStatsContainer, CoinDayStatsContainer, CoinHighContainer, CoinLowContainer, PriceChangeContainer, ColumnContainer,CoinStatsContainer, CoinHigh, CoinLow,  CoinHighTitle ,CoinLowTitle, CoinLastUpdated, CoinPriceChange, CoinPriceTitle, CoinStatsTitle, GeneralTitle, GeneralItem, MiniCoinContainer, ButtonContainer, BuyButton, SellButton} from "./CoinsDetailPageStyles"
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../Modal/Modal";

const CoinsDetailPage = () => {
const [singleCoin, setSingleCoin] = useState(null)
const [openModal, setOpenModal] = useState(false)
const [modalAction, setModalAction] = useState("")
const {id} = useParams()
const {user} = useAuth0()
const {state, actions: {updateUserPortfolio}} = useContext(UserPortfolioContext)

console.log(state)

useEffect(() => {
const getSpecificCoin = async () => {
    try {    
 const response = await fetch(`/api/coin/${id}`)
 const resData = await response.json()
 setSingleCoin(resData.data)
} catch (error) {
    console.log(error)
}
    
}
getSpecificCoin()
}, [])

const buyHandle = (quantity) => {
addCoinHandle(user, singleCoin, quantity, fetchUserPortfolio, updateUserPortfolio, addNewCoin)
} 
const sellHandle = (quantity) => {
    sellCoinHandle(user, singleCoin, quantity, fetchUserPortfolio, updateUserPortfolio, sellCoin)
} 


const buyModalOption = () => {
    setModalAction("buy")
    setOpenModal(true)
}

const sellModalOption = () => {
    setModalAction("sell")
    setOpenModal(true)
}


return (
    <>
    <h1>Nav Bar</h1>
    <h2>${state.balance}</h2>

    {singleCoin && 
    <CoinPageDetailsContainer>
        <SingleCoinContainer>
        <ChartContainer>
        </ChartContainer>
    <CoinContainer>
        <CoinDetailsContainer>

        <CoinInfoContainer>
        <MiniCoinContainer>
        <CoinImg src={singleCoin.image} alt={`${singleCoin.name} picture`}></CoinImg>
        <CoinName> {singleCoin.name}</CoinName>
        <CoinSymbol>{singleCoin.symbol}</CoinSymbol>
        </MiniCoinContainer>
        <CoinLastUpdated>last_updated:{format(new Date(singleCoin.last_updated), "yyyy-MM-dd")}</CoinLastUpdated>
        </CoinInfoContainer>
        
        <CoinPriceTitle>Price</CoinPriceTitle>
        <CoinPrice>${singleCoin.current_price}</CoinPrice>

        <CoinPriceStatsContainer>
        <PriceChangeContainer>
        <CoinPriceChange isNegative={singleCoin.price_change_24h < 0}>${singleCoin.price_change_24h.toFixed(2)}</CoinPriceChange>
        <CoinPercentage isNegative={singleCoin.price_change_percentage_24h < 0}> ({singleCoin.price_change_percentage_24h.toFixed(2)}%)</CoinPercentage>
        </PriceChangeContainer>
        <CoinDayStatsContainer>
        <CoinHighContainer>
        <CoinHighTitle>24H High</CoinHighTitle>
        <CoinHigh> {singleCoin.high_24h}</CoinHigh>
        </CoinHighContainer>
        <CoinLowContainer>
        <CoinLowTitle>24H Low</CoinLowTitle>
        <CoinLow> {singleCoin.low_24h}</CoinLow>
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
        <GeneralItem>{singleCoin.market_cap}</GeneralItem>
        </ColumnContainer>
        <ColumnContainer>
        <GeneralTitle>Total Volume</GeneralTitle>
        <GeneralItem>{singleCoin.total_volume}</GeneralItem>
        </ColumnContainer>
        <ColumnContainer>
        <GeneralTitle>All Time High</GeneralTitle>
        <GeneralItem>${singleCoin.ath}</GeneralItem>
        </ColumnContainer>
        <ColumnContainer>
        <GeneralTitle>Total Supply</GeneralTitle>
        <GeneralItem>{singleCoin.total_supply}</GeneralItem>
        </ColumnContainer>
        <ColumnContainer>
        <GeneralTitle>Circulating Supply</GeneralTitle>
        <GeneralItem>{singleCoin.circulating_supply}</GeneralItem>
        </ColumnContainer>
        </CoinStatsContainer>

        </CoinDetailsContainer>
        <ButtonContainer>
        <BuyButton onClick={buyModalOption}>Buy</BuyButton>
        <SellButton onClick={sellModalOption}>Sell</SellButton>
        </ButtonContainer>
        </CoinContainer>
        </SingleCoinContainer>
        </CoinPageDetailsContainer>
        }
        <Modal
        isOpen = {openModal}
        onClose = {() => setOpenModal(false)}
        modalAction = {modalAction}
        onBuyHandle = {buyHandle}
        onSellHandle = {sellHandle}
        singleCoin = {singleCoin}
        holdings = {state.holdings}
        balance = {state.balance}
      />
    </>
)
}

export default CoinsDetailPage;
import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import addNewCoin from "../utils/addNewCoin"
import sellCoin from "../utils/sellCoin";
import addCoinHandle from "../hooks/addCoinHandle";
import sellCoinHandle from "../hooks/sellCoinHandle";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import {SingleCoinContainer, CoinPageDetailsContainer, ChartContainer, CoinContainer} from "./CoinsDetailPageStyles"
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
    <h2>{state.balance}</h2>

    {singleCoin && 
    <CoinPageDetailsContainer>
        <SingleCoinContainer>
        <ChartContainer>
        </ChartContainer>
    <CoinContainer>
        {singleCoin.name}
       Current Price: {singleCoin.current_price}
        <button onClick={buyModalOption}>Buy</button>
        <button onClick={sellModalOption}>Sell</button>
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
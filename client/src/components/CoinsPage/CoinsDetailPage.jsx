import { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import addNewCoin from "../utils/addNewCoin"
import sellCoin from "../utils/sellCoin";
import fetchUserPortfolio from "../utils/fetchUserPortfolio";
import {SingleCoinContainer, CoinPageDetailsContainer, ChartContainer, CoinContainer} from "./CoinsDetailPageStyles"
import { useAuth0 } from "@auth0/auth0-react";

const CoinsDetailPage = () => {
const [singleCoin, setSingleCoin] = useState(null)
const [quantity, setQuantity] = useState(1);
const {id} = useParams()
const {user} = useAuth0()
const {state, actions: {updateUserPortfolio}} = useContext(UserPortfolioContext)


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

const addCoinHandle = async () => {
try {
    if (user && singleCoin) {
        const coinData = {
            coin_id: singleCoin._id,
            coin_name: singleCoin.name,
            coin_image: singleCoin.image,
            coin_symbol: singleCoin.symbol,
            coin_quantity: parseFloat(quantity),
            coin_purchasePrice: singleCoin.current_price
        }
        await addNewCoin(user.sub, coinData)
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
        alert("Coin added")
    }
} catch(error) {
    console.log(error)
}
}

const sellCoinHandle = async () => {
    try {
        if (user && singleCoin) {
            const coinData = {
                coin_id: singleCoin._id,
                coin_quantity: parseFloat(quantity),
                coin_salePrice: singleCoin.current_price
            }
            await sellCoin(user.sub, coinData)
            await fetchUserPortfolio(user.sub, updateUserPortfolio)
            alert("Coin sold")
        }
    } catch (error) {
        console.log(error)
    }
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
        <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addCoinHandle}>Buy</button>
        <button onClick={sellCoinHandle}>Sell</button>
        </CoinContainer>
        </SingleCoinContainer>
        </CoinPageDetailsContainer>
        }
    </>
)
}

export default CoinsDetailPage;
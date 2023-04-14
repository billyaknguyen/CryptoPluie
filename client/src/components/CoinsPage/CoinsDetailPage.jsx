import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import addNewCoin from "../utils/addNewCoin"
import { useAuth0 } from "@auth0/auth0-react";

const CoinsDetailPage = () => {
const [singleCoin, setSingleCoin] = useState(null)
const [quantity, setQuantity] = useState(1);
const {id} = useParams()
const {user} = useAuth0()

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

console.log(singleCoin)
console.log(user)

const addCoinHandle = async() => {
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
        alert("Coin added")
    }
} catch(error) {
    console.log(error)
}
}

console.log(user)
return (
    <>
    {singleCoin && 
    <div>
        {singleCoin.name}
       Current Price: {singleCoin.current_price}
        <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addCoinHandle}>Buy</button>
        </div>}
    </>
)
}

export default CoinsDetailPage;
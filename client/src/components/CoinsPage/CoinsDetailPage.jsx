import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import addNewCoin from "../utils/addNewCoin"
import { useAuth0 } from "@auth0/auth0-react";

const CoinsDetailPage = () => {
const [singleCoin, setSingleCoin] = useState(null)
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

const addCoinHandle = async() => {
try {
    if (user && singleCoin) {
        await addNewCoin(user.sub, singleCoin)
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
        <button onClick={addCoinHandle}>Buy</button>
        </div>}
    </>
)
}

export default CoinsDetailPage;
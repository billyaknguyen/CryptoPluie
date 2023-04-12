import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

const CoinsDetailPage = () => {
const [singleCoin, setSingleCoin] = useState(null)
const {id} = useParams()

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

return (
    <>
    {singleCoin && <div>{singleCoin.description.en}</div>}
    </>
)
}

export default CoinsDetailPage;
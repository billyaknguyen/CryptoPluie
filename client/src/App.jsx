import HomePage from "./components/Home/Homepage"
import GlobalStyle from "./GlobalStyle"
import { Routes, Route } from "react-router-dom"
import CoinsPage from "./components/CoinsPage/CoinsPage"
import CoinsDetailPage from "./components/CoinsPage/CoinsDetailPage"

const  App = () => {

  return (
    <>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/coins" element={<CoinsPage/>}/>
    <Route path="/coin/:id" element={<CoinsDetailPage/>}/>
    <Route path="/portfolio" element={<h1>hello</h1>}/>
    <Route path="/about" element={<h1>hello</h1>}/>
    </Routes>
    </>
  )
}

export default App

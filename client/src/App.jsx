import HomePage from "./components/Home/Homepage"
import GlobalStyle from "./GlobalStyle"
import { Routes, Route } from "react-router-dom"

const  App = () => {

  return (
    <>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/coins" element={<h1>hello</h1>}/>
    <Route path="/portfolio" element={<h1>hello</h1>}/>
    <Route path="/about" element={<h1>hello</h1>}/>
    </Routes>
    </>
  )
}

export default App

import HomePage from "./components/Home/Homepage";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import CoinsPage from "./components/CoinsPage/CoinsPage";
import CoinsDetailPage from "./components/CoinsPage/CoinsDetailPage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import Navbar from "./components/Navbar/Navbar";
import SuggestionPage from "./components/SuggestionPage/Suggestionpage";
import LeaderBoardPage from "./components/LeaderBoard/LeaderBoardPage";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<CoinsPage />} />
        <Route path="/coin/:id" element={<CoinsDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/suggestions" element={<SuggestionPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

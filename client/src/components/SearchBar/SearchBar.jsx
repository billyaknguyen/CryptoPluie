import { useState, useContext } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import { Wrapper, Bar, Form, Suggestion, SuggestionList, CoinInfoContainer, CoinImage, CoinName, CoinSymbol, CoinListWrapper, CoinLink } from "./SearchBarStyles";

const SearchBar = () => {
  const { coins } = useContext(UserPortfolioContext);
  const [coinSearch, setCoinSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  const handleCoinSearch = (event) => {
    const userSearch = event.target.value;
    setCoinSearch(userSearch);

    if (userSearch.length >= 1) {
      const coinResults = coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(userSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(userSearch.toLowerCase())
        );
      });
      setFilteredCoins(coinResults);
    } else {
      setFilteredCoins([]);
    }
  };

  const handleLinkClick = () => {
    setCoinSearch("")
    setFilteredCoins([])
  }
  console.log(filteredCoins);

  return (
    <Wrapper> 
    <Form>
      <Bar 
      type="text" 
      value={coinSearch}
      placeholder= "Search for a coin"
      onChange={handleCoinSearch}
      />
    </Form>
    {filteredCoins.length > 0 && (
      <SuggestionList>
        {filteredCoins.map((singleCoin, index) => {
          return <Suggestion key={index}>
            <CoinLink onClick={handleLinkClick} 
            to={`/coin/${singleCoin.id}`}>
            <CoinListWrapper>
            <CoinInfoContainer>
              <CoinImage src={singleCoin.image} alt={`${singleCoin.name} picture`}/>
              <CoinName>{singleCoin.name} </CoinName> 
              </CoinInfoContainer>
              <CoinSymbol>{singleCoin.symbol}</CoinSymbol>
              </CoinListWrapper>
              </CoinLink>
          </Suggestion>
        })}
      </SuggestionList>
    )}
    </Wrapper>
  );
};

export default SearchBar;

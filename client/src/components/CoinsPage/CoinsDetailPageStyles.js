import styled from "styled-components";

export const CoinPageDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid yellow;
`;
export const SingleCoinContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  /* &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  } */
`;

export const ChartContainer = styled.div`
  background-color: white;
  flex: 1;
  /* border: 1px solid red; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CoinContainer = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  /* border: 2px solid green; */
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const CoinDetailsContainer = styled.div`
  display: flex;
  margin: 1rem;
  border: 2px solid blue;
  flex-direction: column;
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  border: 2px solid yellow;
`;

export const CoinName = styled.h2`
  font-size: 2rem;
  border: 1px solid yellow;
`;

export const CoinSymbol = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: grey;
`;

export const MiniCoinContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CoinLastUpdated = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: grey;
`;

export const CoinPriceStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
`;

export const CoinPrice = styled.div`
  font-size: 2rem;
  color: black;
`;

export const CoinPriceTitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: grey;
`;

export const CoinPercentage = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;
export const CoinPriceChange = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.isNegative ? "red" : "green")};
`;

export const CoinDayStatsContainer = styled.div`
  display: flex;
  border: 2px solid orange;
  gap: 1rem;
`;

export const PriceChangeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  border: 2px solid orange;
`;

export const CoinHighContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinLowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinStatsContainer = styled.div`
  display: flex;
  max-width: 100%;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  border: 1px solid black;
  align-items: center;
  flex-basis: calc(33.33% - 1rem);
  flex-direction: column;
`;
export const CoinHighTitle = styled.div`
  font-size: 1rem;
  color: green;
`;

export const CoinLowTitle = styled.div`
  font-size: 1rem;
  color: red;
`;
export const CoinHigh = styled.div`
  text-align: right;
`;

export const CoinLow = styled.div`
  text-align: right;
`;

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const CoinStatsTitle = styled.h2`
  font-size: 1.5rem;
`;

export const GeneralTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: grey;
`;
export const GeneralItem = styled.div`
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  border: 2px solid pink;
  justify-content: center;
`;

export const BuyButton = styled.button`
  background-color: #2ea44f;
  border-radius: 6px;
  padding: 6px 16px;
  color: white;

  &:hover {
    background-color: #2c974b;
  }
`;

export const SellButton = styled.button`
  background-color: #f0003c;
  border-radius: 6px;
  padding: 6px 16px;
  color: white;

  &:hover {
    background-color: #cb2027;
  }
`;

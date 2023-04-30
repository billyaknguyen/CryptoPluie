import styled from "styled-components";

export const PortfolioPageWrapper = styled.div`
  margin-top: 200px;
  gap: 50px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  border: 1px solid black;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ProfileContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 500px;
  height: 100px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #fcfcfc;
`;

export const PortfolioStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 500px;
  height: 100px;
  gap: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #fcfcfc;
`;

export const PortfolioTable = styled.table`
  border-collapse: collapse;
  width: 90%;
`;

export const PortfolioTableRow = styled.tr`
  border-bottom: 1px solid lightgray;
`;

export const PortfolioTableData = styled.td`
  text-align: justify;
`;

export const PortfolioTableCoinData = styled.td`
  cursor: pointer;
`;

export const PortfolioTableHead = styled.th`
  text-align: justify;
  color: #DBECFF;
  background-color: #163f61;
`;

export const PortfolioTableProfit = styled.td`
  text-align: justify;
  color: ${(props) => (props.profit >= 0 ? "green" : "red")};
`;

export const PortfolioTableContainer = styled.div`
  overflow: auto;
  width: 90%;
`;

export const BuyButton = styled.button`
  background-color: #2ea44f;
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  flex: 1;
  color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;

  &:hover {
    background-color: #2c974b;
  }
`;

export const SellButton = styled.button`
  background-color: #e34f4f;
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  color: white;
  flex: 1;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;

  &:hover {
    background-color: #c00707;
  }
`;

export const CoinWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const CoinImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CoinName = styled.div``;

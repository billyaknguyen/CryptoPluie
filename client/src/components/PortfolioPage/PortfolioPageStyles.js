import styled from "styled-components";
import { IconEqual, IconPlus, IconCloud } from "@tabler/icons-react";

export const PortfolioPageWrapper = styled.div`
  margin-top: 110px;
  height: 100vh;
  display: flex;
  background-color: white;
  flex-direction: column;
`;

export const PortfolioPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  gap: 50px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  width: 500px;
  height: 100px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  background: linear-gradient(to left,#292e49, #163f61);
`;

export const PortfolioStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  width: 500px;
  height: 100px;
  gap: 20px;
  background: linear-gradient(to left,#292e49, #163f61);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const GeneralTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;
  text-align: center;
  color: #f1fafc;
  font-weight: 600;
`;
export const GeneralItem = styled.div`
  font-size: 1rem;
  color: #dbecff;
`;

export const SuggestionButton = styled.button`
  border: 1px solid #dbecff;
  border-radius: 0 50% 50% 50%;
  cursor: pointer;
  color: #dbecff;
  background-color: transparent;
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  }
`;
export const PendingSuggestionItem = styled.button`
  border: 1px solid #dbecff;
  border-radius: 0 50% 50% 50%;
  cursor: pointer;
  color: #dbecff;
  background-color: transparent;
  font-size: 1.2rem;
  animation: ${(props) => (props.animated ? "ringing 1.5s infinite" : "none")};

  @keyframes ringing {
    0% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(-10deg) scale(1);
    }
    50% {
      transform: rotate(10deg) scale(1);
    }
    75% {
      transform: rotate(-10deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  }
`;
export const PortfolioTable = styled.table`
  border-collapse: collapse;
  width: 90%;
`;

export const PortfolioTableRow = styled.tr`
  border-bottom: 1px solid #163f61;
`;

export const PortfolioTableData = styled.td`
  text-align: justify;
`;

export const PortfolioTableCoinData = styled.td`
  cursor: pointer;
`;

export const PortfolioTableHead = styled.th`
  text-align: justify;
  color: #dbecff;
  background-color: #163f61;
`;

export const PortfolioTableProfit = styled.td`
  text-align: justify;
  color: ${(props) => (props.profit >= 0 ? "green" : "red")};
`;

export const PortfolioTableContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const PlusSign = styled(IconPlus)`
  width: 16px;
  height: 16px;
  color: #dbecff;
`;
export const EqualSign = styled(IconEqual)`
  width: 16px;
  height: 16px;
  color: #dbecff;
`;

export const CloudIcon = styled(IconCloud)`
  width: 24px;
  height: 24px;
  color: #dbecff;
`;

export const UserImg = styled.img`
  width: 50px;
  width: 50px;
`;
 export const Title = styled.h1 `
margin-left: 30px;
color: #163f61;
`
export const CoinName = styled.div`
font-weight: bold;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeaderBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const LeaderBoardTitle = styled.h1`
  margin-left: 30px;
`;

export const LeaderBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeaderBoardBox = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;
`;
export const UserContainer = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #f1fafc;
  background-color: #163f61;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  flex-direction: row;
`;
export const UserInfoContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
`;
export const BalanceContainer = styled.div`
flex: 1;
  display: flex;
`;
export const TopCoinsContainer = styled.div`
  display: flex;
  flex: 1
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CoinImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const LeaderBoardImage = styled.img `
width: 250px;
height: 250px;
margin-bottom: -26px;
z-index: -10;
`

export const CoinLinkContainer = styled(Link) `

&:hover {
  background-color: rgba(0,0,0,0.5);
  border-radius: 50%;
}
`

export const GeneralTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f1fafc;
`;
export const GeneralItem = styled.div`
  font-size: 1.5rem;
  color: #dbecff;
`;

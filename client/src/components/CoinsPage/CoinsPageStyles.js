import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinPageContainer = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
`;

export const CoinCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #85a7c0;
 
`;

export const CoinImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const CoinCard = styled(Link)`
  display: flex;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #fcfcfc;
  margin: 30px;
  width: 150px;
  height: 150px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);

  &:hover {
    background-color: #f1fafc;
  }
`;

export const CoinCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  transform: rotate(-45deg);
`;

export const CoinName = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1rem;
`;

export const CoinPrice = styled.div`
  font-size: 1rem;
`;

export const CoinLink = styled(Link) `
text-decoration: none;
color: inherit;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

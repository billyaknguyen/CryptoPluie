import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid yellow;
`;

export const CoinCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border: 1px solid red;
`;

export const CoinImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const CoinCard = styled(Link)`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #85a7c0;
  margin: 0.5rem;
  width: 170px;
  height: 170px;
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
  color: black;
  text-align: center;
  font-size: 1rem;
`;

export const CoinPrice = styled.div`
  color: black;
  font-size: 1rem;
`;

export const CoinH2 = styled.h2`
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconArrowBigRightFilled, IconArrowBigLeftFilled } from '@tabler/icons-react';

export const CoinPageContainer = styled.div`
  display: flex;
  margin: 100px 50px 50px 50px;
  flex-direction: column;
  justify-content: center;
`;

export const CoinCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  /* background-color: #163f61; */
  background: linear-gradient(to left,#292e49, #163f61)
 
`;

export const CoinImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const CoinCard = styled(Link)`
  display: flex;
  color: #003E85;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: white;
  margin: 30px;
  width: 160px;
  height: 160px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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

export const CoinCardContainer = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
`

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

export const RightArrow = styled(IconArrowBigRightFilled) `
width: 24px;
height: 24px;
color: #fcfcfc;
`

export const LeftArrow = styled(IconArrowBigLeftFilled) `
width: 24px;
height: 24px;
color: #fcfcfc;
`
export const BackButton = styled.button `
border: none;
background-color: transparent;

  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  }
`
export const NextButton = styled.button `
border: none;
background-color: transparent;
  &:hover {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`
export const CoinPercentage = styled.div`
  font-size: 1rem;
 
  color: ${(props) => (props.isNegative ? "#8A0000" : "#004D00")};
`;

export const PaginationButton = styled.button`
  border: none;
  background-color: ${(props) => (props.active ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  border-radius: 10px;;
  font-size: 1rem;
  color: #fcfcfc;
  margin: 0 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  `
export const Title = styled.h1 `
margin-left: 30px;
color: #f1fafc;
`

export const CoinModelImg = styled.img `
width: 200px;
height: 200px;
margin-bottom: -20px;
z-index: -100;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  justify-content: center;
`;

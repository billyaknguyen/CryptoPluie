import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuggestionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  gap: 20px;
  margin-top: 0px;
`;

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
`;

export const SuggestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  border-radius: 20px;
  background-color: #fcfcfc;
  padding: 20px;
`;

export const SuggestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #85a7c0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const SuggestionImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const SuggestionText = styled.div`
  font-size: 1rem;
`;

export const SuggestionCoinImage = styled.img `
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;


export const SuggestionCoinContainer = styled(Link) `
display: flex;
text-decoration: none;
align-items: center;
gap: 0.5rem;

`
export const SuggestionButton = styled.button`
  background-color: #fcfcfc;
  padding: 5px 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;


  &:hover {
    background-color: #f1fafc;

  }
`;

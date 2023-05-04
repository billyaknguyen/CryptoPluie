import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuggestionPageContainer = styled.div`
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #f1fafc;
  margin-left: 10px;
`;

export const SuggestionPageTitle = styled.h1 `
font-size: 2rem;
margin-left: 30px;
`

export const SuggestionWrapper = styled.div`
  display: flex;
  padding: 5px;
  max-height: 500px;
  width: 280px;
  flex-direction: column;
  overflow: auto;
  background-color: #163f61;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  gap: 20px;
`;

export const SuggestionContentContainer = styled.div `
display: flex;
gap: 1rem;
flex-direction: column;
`

export const SuggestionContainer = styled.div `
display: flex;
width: 100%;
margin-bottom: 50px;
justify-content: space-around;

`

export const SuggestionCard = styled.div`
  display: flex;
  padding: 10px;
  gap: 1rem;
  flex-direction: column;
  justify-content: left;
  background-color: #f1fafc;
  border: 1px solid black;
  border-radius: 12px;
`;

export const SuggestionImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const NoSuggestionText = styled.div`
  font-size: 1rem;
  margin-left: 10px;
   color: #f1fafc;
   text-align: left
`;

export const SuggestionTitle = styled.div `
font-size: 1rem;
  font-weight: bold;
  text-align: left;
  overflow-wrap: break-word;
  max-width: 220px

`
export const SuggestionText = styled.div `
font-size: 1rem;
text-align: left;
overflow-wrap: break-word;
max-width: 220px

`

export const MessageContainer = styled.div `
display: flex;
flex-direction: column;
border-top: 1px solid #163f61;
border-bottom: 1px solid #163f61
`

export const StatusContainer = styled.div `
display: flex;
gap: 0.5rem;
align-items: center;
`

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

export const ProfileContainer = styled.div `
display: flex;
gap: 0.5rem;
align-items: center;
`

export const CoinContainer = styled.div `
display: flex;
gap: 0.5rem;
align-items: center;
`

export const DateContainer = styled.div `
display: flex;
gap: 0.5rem;
align-items: center;
`

export const AcceptButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#c4c4c4" : "#4cb760")};
  padding: 5px 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


  &:hover {
    background-color: ${(props) => (props.disabled ? "#c4c4c4" : "#2c974b")};

  }
`;


export const DenyButton = styled.button`
background-color: ${(props) => (props.disabled ? "#c4c4c4" : "#ea5252")};
  padding: 5px 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


  &:hover {
    background-color: ${(props) => (props.disabled ? "#c4c4c4" : "#d62929")};
  }
`;
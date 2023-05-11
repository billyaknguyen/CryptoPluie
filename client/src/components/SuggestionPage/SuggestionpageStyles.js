import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuggestionPageContainer = styled.div`
  display: flex;
  padding-top: 120px;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #f1fafc;
  margin-left: 10px;
`;

export const SuggestionPageTitle = styled.h1 `
font-size: 2rem;
margin-left: 30px;
background: linear-gradient(to left, #536976, #292e49);
-webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const SuggestionWrapper = styled.div`
  display: flex;
  padding: 5px;
  max-height: 500px;
  min-height: 500px;
  width: 280px;
  flex-direction: column;
  overflow: auto;
  background: linear-gradient(to left,#292e49, #163f61);
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
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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
  background: ${(props) => (props.disabled ? "#c4c4c4" : "linear-gradient(to right, #11998e, #38ef7d)")};
  padding: 5px 10px;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


  &:hover {
    background-color: ${(props) => (props.disabled ? "#c4c4c4" : "linear-gradient(to right, #11998e, #38ef7d)")};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;


export const DenyButton = styled.button`
background: ${(props) => (props.disabled ? "#c4c4c4" : "linear-gradient(to right, #eb3349, #f45c43)")};
  padding: 5px 10px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


  &:hover {
    background-color: ${(props) => (props.disabled ? "#c4c4c4" : "linear-gradient(to right, #eb3349, #f45c43)")};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;
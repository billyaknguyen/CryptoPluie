import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div `
position: relative;
width: 200px;

`
export const Form = styled.form `
display: flex;
width: 90%;
background-color: #ffffff;
align-items: center;
border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &:focus-within {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
  }

`
export const Bar = styled.input `
width: 90%;
border: 1px solid black;
height: 20px;
padding: 10px;
border: none;
outline: none;
border-radius: 10px;
    &::placeholder {
        font-size: 1em;
    }
`

export const SuggestionList= styled.ul `
z-index: 10;
position: absolute;
overflow: auto;
max-width: 200px;
max-height: 350px;
padding: 0;
margin-top: 10px;
background-color: #fcfcfc;
list-style-type: none;
border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const Suggestion = styled.li `
padding: 10px 20px;
color: #003E85;
cursor: pointer;

&:hover {
background-color: #f1fafc ;
}
`

export const CoinLink = styled(Link) `
text-decoration: none;
color: inherit;
`
export const CoinListWrapper = styled.div `
display: flex;
justify-content: space-between;
`
export const CoinInfoContainer = styled.div `
display: flex;
gap: 20px;
`
export const CoinName = styled.div `
font-weight: bold;
`
export const CoinImage = styled.img `
width: 30px;
height: 30px;
border-radius: 50%;
`
export const CoinSymbol = styled.div `

`
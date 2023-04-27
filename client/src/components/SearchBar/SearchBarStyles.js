import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div `
position: relative;
width: 300px;
`
export const Form = styled.form `
display: flex;
justify-content: center;
`
export const Bar = styled.input `
width: 100%;
height: 20px;
padding: 10px;
border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &::placeholder {
        font-size: 1rem;
    }
`

export const SuggestionList= styled.ul `
z-index: 10;
position: absolute;
overflow: auto;
width: 100%;
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
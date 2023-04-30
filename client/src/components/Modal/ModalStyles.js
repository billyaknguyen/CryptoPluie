import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 62, 74, 0.7);
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
 gap: 10px;
  background-color: #163f61;
  position: relative;
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #f1fafc;
`;

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CoinName = styled.h2`
  font-size: 2rem;
  color: #f1fafc;
`;

export const MiniCoinContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const GeneralTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #f1fafc;
`;
export const GeneralItem = styled.div`
  font-size: 1rem;
`;

export const QuantityForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid lightgray;
`;

export const QuantityLabel = styled.label`
font-size: 1.2rem;
margin: 0 10px;
color: #f1fafc;
`;

export const QuantitySelector = styled.input`
font-size: 1rem;
width: 20%;
padding: 8px 12px;
margin: 8px 0;
 border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const BuyButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#C4C4C4" : "#2ea44f")};
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#C4C4C4" : "#2c974b")};
  }
`;

export const SellButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#C4C4C4" : "#e34f4f")};
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: #c00707;
    background-color: ${(props) => (props.disabled ? "#C4C4C4" : "#c00707")};
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid lightgray;
`;

export const XButton = styled.button `
width: 20px;
font-size: 1rem;
color: #f1fafc;
cursor: pointer;
  border: none;
  background-color: transparent;

&:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
    color: #262338;
    background-color: #f1fafc ;
  }
`

export const ButtonContainer = styled.div `
display: flex;
justify-content: flex-end;
`
export const CoinPriceContainer = styled.div`
  display: flex;
  border-top: 1px solid lightgray;
`;

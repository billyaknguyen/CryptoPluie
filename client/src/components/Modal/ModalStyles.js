import styled from "styled-components";
import { IconCloudX, IconCloudDollar,  } from "@tabler/icons-react";

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
  background: linear-gradient(to left, #536976, #292e49);
  position: relative;
  width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #f1fafc;
`;

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CoinName = styled.h2`
  font-size: 1.5rem;
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
   text-align: center;
  font-size: 1rem;
  color: #DBECFF;
`;

export const QuantityForm = styled.form`
display: flex;
padding: 5px 0;
align-items: center;
justify-content: center;
border-top: 1px solid #DBECFF;
`;

export const Label = styled.label`
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
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

 export const CustomAmountInput = styled.input`
font-size: 1rem;
width: 20%;
padding: 8px 12px;
margin: 8px 0;
border: none;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const BuyButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-size: 1rem;
  background: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #11998e, #38ef7d)")};
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  color: white;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #11998e, #38ef7d)")};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export const SellButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-size: 1rem;
  background: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #eb3349, #f45c43)")};
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  color: white;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #e43a15, #e65245)")};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export const SellAllButton = styled.button `
display: flex;
color: #FFCBCB;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-size: 1rem;
border: none;
background-color: transparent;
cursor: pointer;

&:hover {
  color: red;
}

`

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #DBECFF;
`;

export const XButton = styled.button `
width: 20px;
font-size: 1rem;
color: #f1fafc;
cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    color: #FFCBCB;
  }
`

export const CloudXIcon = styled(IconCloudX) `
width: 24px;
height: 24px;
`

export const CloudDollarIcon = styled(IconCloudDollar) `
width: 24px;
height: 24px;
`

export const SubmitContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
`

export const ButtonContainer = styled.div `
display: flex;
justify-content: flex-end;

`

export const WarningMessage = styled.div `
font-size: 1rem;
text-align: center;
color: #FFCBCB;
`
export const CoinPriceContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #DBECFF;
`;

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
  background-color: #f1fafc;
  position: relative;
  width: 800px;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const CoinImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CoinName = styled.h2`
  font-size: 2rem;
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
  color: grey;
`;
export const GeneralItem = styled.div`
  font-size: 1rem;
`;

export const QuantityForm = styled.form`
`;

export const QuantityLabel = styled.label``;

export const QuantitySelector = styled.input``;

export const BuyButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#C4C4C4" : "#2ea44f")};
  border-radius: 6px;
  padding: 6px 16px;
  margin: 10px;
  flex: 1;
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
  flex: 1;
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
`;

export const CoinPriceContainer = styled.div`
  display: flex;
`;

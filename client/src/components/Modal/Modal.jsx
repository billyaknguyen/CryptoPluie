import {
  ModalContainer,
  ModalItem,
  ModalTitle,
  ColumnContainer,
  GeneralItem,
  GeneralTitle,
  CoinImg,
  CoinName,
  MiniCoinContainer,
  QuantityForm,
  QuantitySelector,
  QuantityLabel,
  BuyButton,
  SellButton,
  BalanceContainer,
  CoinPriceContainer,
} from "./ModalStyles";

import priceFormatter from "../utils/priceFormatter";
import { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  modalAction,
  onBuyHandle,
  onSellHandle,
  singleCoin,
  balance,
  holdings,
}) => {
  if (!isOpen) return null;

  const [quantity, setQuantity] = useState(1);

  const closeModalOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const userCoinHolding = holdings.find(
    (holding) => holding.coin_id === singleCoin._id
  );

  const userCoinQuantity = userCoinHolding ? userCoinHolding.coin_quantity : 0;

  const totalAmount = singleCoin.current_price * quantity;
  const remainingBalance =
    modalAction === "buy" ? balance - totalAmount : totalAmount + balance;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (modalAction === "buy") {
      onBuyHandle(quantity);
    } else {
      onSellHandle(quantity);
    }
  onClose()
  };

  console.log(userCoinHolding);

  return (
    <ModalContainer onClick={closeModalOutside}>
      <ModalItem>
        <MiniCoinContainer>
          <ModalTitle>{modalAction === "buy" ? "Buy" : "Sell"}</ModalTitle>
          <CoinImg
            src={singleCoin.image}
            alt={`${singleCoin.name} picture`}
          ></CoinImg>
          <CoinName> {singleCoin.name}</CoinName>
          <button onClick={() => onClose()}>X</button>
        </MiniCoinContainer>
        <CoinPriceContainer>
          <ColumnContainer>
            <GeneralTitle>1x {singleCoin.name}</GeneralTitle>
            <GeneralItem>
              {priceFormatter(singleCoin.current_price * 1)}
            </GeneralItem>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>5x {singleCoin.name}</GeneralTitle>
            <GeneralItem>
              {priceFormatter(singleCoin.current_price * 5)}
            </GeneralItem>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>10x {singleCoin.name}</GeneralTitle>
            <GeneralItem>
              {priceFormatter(singleCoin.current_price * 10)}
            </GeneralItem>
          </ColumnContainer>
        </CoinPriceContainer>
        <ColumnContainer>
          <GeneralTitle>You have currently have</GeneralTitle>
          <GeneralItem>
            {userCoinQuantity} {singleCoin.name}
          </GeneralItem>
        </ColumnContainer>
        <QuantityForm onSubmit={handleSubmit}>
          <QuantityLabel htmlFor="quantity">Quantity:</QuantityLabel>
          <QuantitySelector
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          {modalAction === "buy" ? (
            <BuyButton disabled={quantity <= 0 || remainingBalance < 0 }>
              Confirm Purchase
            </BuyButton>
          ) : (
            <SellButton disabled={quantity <= 0 || userCoinQuantity < quantity}>
              Confirm Sale
            </SellButton>
          )}
        </QuantityForm>
        <ModalTitle>Balances</ModalTitle>
        <BalanceContainer>
          <ColumnContainer>
            <GeneralTitle>Current</GeneralTitle>
            <GeneralItem> {priceFormatter(balance)}</GeneralItem>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>
              {modalAction === "buy" ? "Total Cost" : "Total Gain"}
            </GeneralTitle>
            <GeneralItem> {priceFormatter(totalAmount)}</GeneralItem>
          </ColumnContainer>
          <ColumnContainer>
            <GeneralTitle>Post-trade</GeneralTitle>
            <GeneralItem> {priceFormatter(remainingBalance)}</GeneralItem>
          </ColumnContainer>
        </BalanceContainer>
      </ModalItem>
    </ModalContainer>
  );
};

export default Modal;

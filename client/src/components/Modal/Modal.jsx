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
  CustomAmountInput,
  Label,
  BuyButton,
  SellButton,
  SellAllButton,
  BalanceContainer,
  CoinPriceContainer,
  ButtonContainer,
  XButton,
  CloudXIcon,
  CloudDollarIcon,
  WarningMessage,
} from "./ModalStyles";
import priceFormatter from "../utils/priceFormatter";
import { useState, useEffect } from "react";

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
  const [customBuyAmount, setCustomBuyAmount] = useState(0);
  const [customSellAmount, setCustomSellAmount] = useState(0);

  useEffect(() => {
    if (singleCoin.current_price) {
      const customBuyQuantity = customBuyAmount / singleCoin.current_price;
      setQuantity(customBuyQuantity < 0 ? 0 : customBuyQuantity);
    }
  }, [customBuyAmount, singleCoin.current_price]);

  useEffect(() => {
    if (singleCoin.current_price) {
      const customSellQuantity = customSellAmount / singleCoin.current_price;
      setQuantity(customSellQuantity < 0 ? 0 : customSellQuantity);
    }
  }, [customSellAmount, singleCoin.current_price]);

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
    onClose();
  };

  return (
    <ModalContainer onClick={closeModalOutside}>
      <ModalItem>
        <ButtonContainer>
          <XButton onClick={() => onClose()}>
            <CloudXIcon />
          </XButton>
        </ButtonContainer>
        <MiniCoinContainer>
          <ModalTitle>{modalAction === "buy" ? "Buy" : "Sell"}</ModalTitle>
          <CoinImg
            src={singleCoin.image}
            alt={`${singleCoin.name} picture`}
          ></CoinImg>
          <CoinName> {singleCoin.name}</CoinName>
        </MiniCoinContainer>
        <CoinPriceContainer>
          <ColumnContainer>
            <GeneralTitle>You currently own</GeneralTitle>
            <GeneralItem>
              {userCoinQuantity} {singleCoin.name}
            </GeneralItem>
          </ColumnContainer>
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
        <QuantityForm onSubmit={handleSubmit}>
          <Label htmlFor="quantity">Quantity:</Label>
          <QuantitySelector
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => {
              if (event.target.value <= 100000000000) {
                setQuantity(event.target.value);
              }
            }}
          />
          {modalAction === "buy" ? (
            <>
              <Label htmlFor="dollars">Dollars:</Label>
              <CustomAmountInput
                type="number"
                id="customBuyAmount"
                name="customBuyAmount"
                value={customBuyAmount}
                onChange={(event) => {
                  if (event.target.value <= 100000000000)
                    setCustomBuyAmount(event.target.value);
                }}
              />
            </>
          ) : (
            <>
              <Label htmlFor="dollars">Dollars:</Label>
              <CustomAmountInput
                type="number"
                id="customSellAmount"
                name="customSellAmount"
                value={customSellAmount}
                onChange={(event) => {
                  if (event.target.value <= 100000000000)
                    setCustomSellAmount(event.target.value);
                }}
              />
            </>
          )}

          {modalAction === "buy" ? (
            <BuyButton disabled={quantity <= 0 || remainingBalance < 0}>
              <CloudDollarIcon />
              Submit Order
            </BuyButton>
          ) : (
            <>
              <SellButton
                disabled={quantity <= 0 || userCoinQuantity < quantity}
              >
                <CloudDollarIcon />
                Submit Order
              </SellButton>
              <SellAllButton
                type="button"
                onClick={() => setQuantity(userCoinQuantity)}
              >
                Sell All
              </SellAllButton>
            </>
          )}
        </QuantityForm>
        <WarningMessage>
          {modalAction === "buy" && quantity <= 0
            ? "Please choose a quantity higher than 0."
            : modalAction === "buy" && remainingBalance < 0
            ? "Insufficient fund"
            : modalAction === "sell" && userCoinQuantity <= 0
            ? "You don't own any of this coin."
            : modalAction === "sell" && userCoinQuantity < quantity
            ? "You do not own enough coin"
            : modalAction === "sell" && quantity <= 0
            ? "Please choose a quantity higher than 0."
            : null}
        </WarningMessage>
        <BalanceContainer>
          <ModalTitle>Balances</ModalTitle>
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

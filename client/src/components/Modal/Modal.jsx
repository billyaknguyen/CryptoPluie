import { ModalContainer, ModalItem, ModalTitle } from "./ModalStyles"
// import { useState } from "react"

const Modal = ({isOpen,onClose, modalAction,}) => {
  if(!isOpen)  return null
const closeModalOutside = (event) => {
  if (event.target === event.currentTarget)  {
    onClose()
  }
}
// const [quantity, setQuantity] = useState(1)

  return (
    <ModalContainer onClick={closeModalOutside}>
    <ModalItem>
      <ModalTitle>{modalAction === "buy" ? "Buy" : "Sell"}</ModalTitle>
    </ModalItem>
    </ModalContainer>
  )
}

export default Modal
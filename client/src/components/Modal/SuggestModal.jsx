import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  ModalContainer,
  ButtonContainer,
  ModalItem,
  ModalTitle,
  UserSelect,
  MessageBox,
  SubmitButton,
  CloudShareIcon,
  XButton,
  XButtonIcon,
  WarningMessage,
} from "./SuggestModalStyles";

const SuggestCoinModal = ({
  isOpen,
  onClose,
  suggestCoinHandle,
  singleCoin,
  loggedInUserId,
  loggedInUsername,
  loggedInImage,
  updateUserPortfolio,
  fetchUserPortfolio,
}) => {
  if (!isOpen) {
    return null;
  }

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  const closeModalOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const resData = await response.json();
        setUsers(resData.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    const userSelected = event.target.value;
    const selected = users.find((user) => user.user_id === userSelected);
    setSelectedUser(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedUser) {
      const messageData = {
        coin_id: singleCoin._id,
        coin_name: singleCoin.name,
        coin_image: singleCoin.image,
        coin_symbol: singleCoin.symbol,
        coin_price: singleCoin.current_price,
        message: message,
        messageDate: format(new Date(), "yyyy-MM-dd"),
        sender: {
          sender_id: loggedInUserId,
          sender_name: loggedInUsername,
          sender_picture: loggedInImage,
        },
        receiver: {
          receiver_name: selectedUser.username,
          receiver_picture: selectedUser.picture,
        },
        status: "pending",
      };
      suggestCoinHandle(
        loggedInUserId,
        selectedUser.user_id,
        messageData,
        fetchUserPortfolio,
        updateUserPortfolio
      );
    }

    onClose();
  };

  console.log(selectedUser);
  console.log(message);
  return (
    <ModalContainer onClick={closeModalOutside}>
      <ModalItem>
        <ButtonContainer>
          <XButton onClick={() => onClose()}>
            <XButtonIcon />
          </XButton>
        </ButtonContainer>
        <ModalTitle>Suggest Coin to</ModalTitle>
        <UserSelect
          value={selectedUser?.user_id || ""}
          onChange={handleUserChange}
        >
          <option value="" disabled>
            Select a user
          </option>
          {users
            .filter((user) => user.user_id !== loggedInUserId)
            .map((user) => (
              <option key={user.user_id} value={user.user_id}>
                {user.username}
              </option>
            ))}
        </UserSelect>
        <MessageBox
          type="text"
          placeholder="Write a message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <WarningMessage>
          {!selectedUser
            ? "please select a user"
            : message === ""
            ? "please enter a message"
            : null}
        </WarningMessage>
        <SubmitButton
          disabled={!selectedUser || message === ""}
          onClick={handleSubmit}
        >
          <CloudShareIcon />
          Suggest Coin
        </SubmitButton>
      </ModalItem>
    </ModalContainer>
  );
};

export default SuggestCoinModal;

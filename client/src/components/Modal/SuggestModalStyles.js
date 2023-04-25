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
  width: 500px;
  background-color: #f1fafc;
  position: relative;
  max-width: 100%;
  padding: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserSelect = styled.select`
  width: 50%;
  margin-bottom: 20px;
  font-size: 1rem;
`;

export const MessageBox = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #2d72d9;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;

  &:hover {
    background-color: #1a57a3;
  }
`;

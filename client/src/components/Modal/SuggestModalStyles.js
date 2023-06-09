import styled from "styled-components";
import { IconCloudShare, IconCloudX } from "@tabler/icons-react";

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
  align-items: center;
  width: 500px;
  background: linear-gradient(to left, #536976, #292e49);
  position: relative;
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #f1fafc;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserSelect = styled.select`
  width: 50%;
  margin-bottom: 20px;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const MessageBox = styled.input`
  font-size: 1rem;
  width: 90%;
  padding: 8px 12px;
  margin: 8px 2px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const CloudShareIcon = styled(IconCloudShare)`
  width: 24px;
  height: 24px;
`;
export const XButtonIcon = styled(IconCloudX)`
  width: 24px;
  height: 24px;
`;

export const XButton = styled.button`
  width: 20px;
  font-size: 1rem;
  color: #f1fafc;
  cursor: pointer;
  border: none;
  background-color: transparent;
  
    &:hover {
    color: #ffcbcb;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const WarningMessage = styled.div`
  margin: 5px;
  font-size: 1rem;
  text-align: center;
  color: #ffcbcb;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px;
  font-size: 1rem;
  background: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #2193b0, #6dd5ed)")};
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#C4C4C4" : "linear-gradient(to right, #2193b0, #6dd5ed)")};
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

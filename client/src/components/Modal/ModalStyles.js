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
  width: 500px;
  background-color: #f1fafc;
  position: relative;
  max-width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
`;

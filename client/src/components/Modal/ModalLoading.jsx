import styled from "styled-components";
import { IconCloudRain } from '@tabler/icons-react';



const ModalSpinner = () => {
    return (
        <LoadingContainer>
          <CloudIcon/>
      <TextContainer>
      <LoadingText>Loading</LoadingText>
        <RainDrop />
        <RainDrop />
        <RainDrop />
      </TextContainer>
    </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const LoadingText = styled.div `
    color: white;
`
const TextContainer = styled.div `
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  align-items: center;
  flex-direction: row;

`
const CloudIcon = styled(IconCloudRain) `
  width: 64px;
  height: 64px;
  color: white
`

const RainDrop = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 0 50% 50% 50%;
  background-color: white;
  animation: rainBounce 1.2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0.10s;
  }

  &:nth-child(2) {
    animation-delay: 0.20s;
  }

  &:nth-child(3) {
    animation-delay: 0.30s;
  }

  @keyframes rainBounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
  }
`;
export default ModalSpinner




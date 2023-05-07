import styled from "styled-components";
import { IconCloudExclamation } from '@tabler/icons-react';


const ModalError = () => {
    return (
        <ErrorContainer>
        <ErrorIcon/>
        <ErrorText>An unknown error has occurred.</ErrorText>
        <RefreshText>Please try refreshing the page.</RefreshText>
        </ErrorContainer>
    )
}

const ErrorContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ErrorIcon = styled(IconCloudExclamation) `
    width: 50px;
    height: 50px;
    color: white
`
const ErrorText = styled.p `
    font-size: 2rem;
    color: white;

`
const RefreshText = styled.p `
    font-size: 1rem;
    color: white;
`

export default ModalError
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Login</Button>;
};

const Button = styled.button `
  color: #f1fafc;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
    color: #262338;
    background-color: #f1fafc ;
  }

`
export default LoginButton;

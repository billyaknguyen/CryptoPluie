import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
<Button onClick={() => loginWithRedirect()}><ButtonText> Start with a $1,000,000 portfolio now!</ButtonText></Button>
  )
};

const ButtonText = styled.span`
  background: linear-gradient(
    to left, #ffeeee, #ddefbb
  );
  /* padding: 10px; */
  font-size: 1.1em;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bolder;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    background: linear-gradient(
    to right, #e0eafc, #cfdef3
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  }
  
`;

const Button = styled.button `
  color: #f1fafc;
  cursor: pointer;
  border: none;
  padding: 15px;
  border-radius: 100px;
  background: linear-gradient(to left,#292e49, #163f61);
  
  
 
  &:hover {
    box-shadow: rgba(3, 4, 4, 0.3) 0px 1px 2px 0px;
    background-color: grey;
    
  }

`
export default SignUpButton;

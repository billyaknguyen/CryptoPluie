import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
<Button onClick={() => loginWithRedirect()}><ButtonText> Start with a $1,000,000 portfolio now!</ButtonText></Button>
  )
};

const ButtonText = styled.span`
  background-image: linear-gradient(
    to left, #ffeeee, #ddefbb
  );
  padding: 20px;
  font-size: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bolder;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:hover {
    background-image: linear-gradient(
      
  );
  font-weight: bolder;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  }
`;

const Button = styled.button `
  color: #f1fafc;
  cursor: pointer;
  border: none;
  padding: 20px;
  border-radius: 100px;
  background-color: #0A66C2;
  
  
 
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
    background-color: #16437E;
    
  }

`
export default SignUpButton;

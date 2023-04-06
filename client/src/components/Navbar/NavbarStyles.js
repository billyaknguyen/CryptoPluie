import styled from "styled-components";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 200px;
  width: 100%;
  border: 1px solid black;
`;

export const MainTitle = styled.h1`
  margin-left: 1rem;
  font-size: 30px;
  letter-spacing: 3px;
`;

export const Logo = styled.img`
  height: 120px;
  width: 120px;
`;

export const HomeLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-left: 1rem;
  /* flex-direction: row; */
`;

export const SignUpButton = styled.button`
  margin-right: 1rem;
`;

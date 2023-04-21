import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    color: #262338;
    background-color: #f1fafc;

    //#f1fafc
}
h2 , h1 {
  font-weight: 600;
}
html {
  scroll-behavior: smooth;
}

`;

export default GlobalStyle;

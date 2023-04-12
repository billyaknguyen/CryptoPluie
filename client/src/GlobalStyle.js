import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    color: black;

    //#f1fafc
}
html {
  scroll-behavior: smooth;
}

`;

export default GlobalStyle;

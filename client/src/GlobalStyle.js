import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif; 
    color: #003E85 ;
    background-color: #f1fafc;
}
h2 , h1 {
  font-weight: 600;
}
html {
  scroll-behavior: smooth;
}

:root {
  --toastify-font-family: 'Quicksand', sans-serif;
  --toastify-toast-width: 520px;
  --toastify-spinner-color: #85a7c0;
  .Toastify__toast-container {
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.Toastify__toast {
  background-color: #163f61;
  color: #DBECFF;
}


.Toastify__progress-bar-theme--light {
  background: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
}
}
`

export default GlobalStyle;

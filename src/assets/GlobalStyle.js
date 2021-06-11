import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
height: 100%;
}

body {
  min-height: 100%;
  background-color: red;
}


* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}

`;

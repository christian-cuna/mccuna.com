import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  html {
      width: 100%;
      height: 100%;
      overflow: visible;
  }

  body {
      width: 100%;
      height: 100%;
      margin: 0;
  }

  #___gatsby {
    width: 100%;
    height: 100%;
  }
  
  #___gatsby>div {
    width: 100%;
    height: 100%;
  }

  a {
    background-image: none;
  }

`;

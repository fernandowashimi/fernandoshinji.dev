import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(./background.png);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: top;
    background-size: cover;
  }
`;

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

  .contact {
    position: fixed;
    bottom: 50px;
    z-index: 1;

    span {
      margin: 0 5px;
      font-size: 1.3em;

      a {
        color: #aaaaaa;
        text-decoration: none;
        transition: all .3s ease-in-out;

        &:hover {
          color: #eeeeee;
        }
      }
    }
  }
`;

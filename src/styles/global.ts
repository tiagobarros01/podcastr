import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 15px;
      background: ${(props) => props.theme.colors.scrollbar};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: ${(props) => props.theme.colors.scrollbarThumb};
      }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.secondary};
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: ${(props) => props.theme.colors.gray500};
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${(props) => props.theme.colors.gray800};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

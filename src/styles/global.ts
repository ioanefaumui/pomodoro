import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }

  body {
    display: grid;
    place-items: center;
    min-height: 100dvh;
    padding: 2rem;
    background-color: ${(props) => props.theme["slate-100"]};
    color: ${(props) => props.theme.jetblack};
  }

  body, input, textarea, button {
    font-family: "Shippori Antique B1", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

`;

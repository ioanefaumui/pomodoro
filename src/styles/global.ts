import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.focus};
  }

  body {
    background-color: ${(props) => props.theme["slate-400"]};
    color: ${(props) => props.theme.jetblack};
    -webkit-font-smoothing: antialiased;
    padding-inline: 2rem;
  }


  body, input, textarea, button {
    font-family: "Shippori Antique B1", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    body {
      padding-inline: 1rem; 
    }
  }
`;

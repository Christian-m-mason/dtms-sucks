import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
    font-size: 10px;
  }

`;

export const Theme = {
  primary: "#ffd530",
  boxShadows: [
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
  ],
};

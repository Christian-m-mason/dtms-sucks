import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f2f2f2;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
    font-size: 10px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
      "Sidebar Header "
      "SideBar Main";
  }
`;

export const Theme = {
  primary: "#ffd530",
  fontFamily: "'Overpass', sans-serif",
  textColor: "#121212",
  boxShadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
  ],
};

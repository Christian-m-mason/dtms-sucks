import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { Theme } from "./styles/GlobalStyles";

import { Container } from "./styles/Layout";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Container>
          <Sidebar />
          <Container width="100%" column>
            <Header />
            <Main />
          </Container>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

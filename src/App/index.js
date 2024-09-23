import Aside from "./Aside";
import Header from "./Header";
import React from "react";
import Container from "./style/index";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import { ThemeProvider } from "styled-components";
import { ResetStyle } from "../Shared/style/reset.js";
import { GlobalStyle } from "../Shared/style/globalStyle";
import { useSwitchTheme } from "./model/useSwitchTheme";

const App = () => {
  const [mode, switchTheme] = useSwitchTheme();

  return (
    <ThemeProvider theme={mode}>
      <Router>
        <ResetStyle />
        <GlobalStyle />
        <Header switchTheme={switchTheme} />
        <Container>
          <Aside />
          <Page />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

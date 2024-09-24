import Aside from "./Aside";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { useSwitchTheme } from "./model/useSwitchTheme";
import Style from "./style/index";

const App = () => {
  const [mode, switchTheme] = useSwitchTheme();

  return (
    <ThemeProvider theme={mode}>
      <Router>
        <GlobalStyle />
        <Header switchTheme={switchTheme} />
        <Style.Container>
          <Aside />
          <Page />
        </Style.Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

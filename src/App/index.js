import Aside from "./Aside";
import Header from "./Header";
import useMenuClick from "App/model/useMenuClick";
import React from "react";
import Container from "./style/index";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import { theme } from "Shared/style/themes";
import { ThemeProvider } from "styled-components";
import ResetStyle from "../Shared/style/reset.js";
import { useSwitchTheme } from "./model/useSwitchTheme";
const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [mode, switchTheme] = useSwitchTheme();

  return (
    <ThemeProvider theme={mode}>
      <Router>
        <ResetStyle />
        <Header mode={mode} menuClick={toggleMenu} switchTheme={switchTheme} />
        <Container>
          <Aside isMenuClicked={isMenuClicked} />
          <Page />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

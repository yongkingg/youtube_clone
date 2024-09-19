import Aside from "./Aside";
import Header from "./Header";
import useMenuClick from "App/model/useMenuClick";
import React from "react";
import Container from "./style/index";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import { ThemeProvider } from "styled-components";
import { ResetStyle } from "../Shared/style/reset.js";
import { GlobalStyle } from "../Shared/style/globalStyle";
import { useSwitchTheme } from "./model/useSwitchTheme";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [mode, switchTheme] = useSwitchTheme();
  const darkColor = "var(--dark-color)";

  return (
    <ThemeProvider theme={mode}>
      <Router>
        <ResetStyle />
        <GlobalStyle />
        <Header
          mode={mode}
          menuClick={toggleMenu}
          switchTheme={switchTheme}
          darkColor={darkColor}
        />
        <Container>
          <Aside
            mode={mode}
            isMenuClicked={isMenuClicked}
            darkColor={darkColor}
          />
          <Page mode={mode} darkColor={darkColor} />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

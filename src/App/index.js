import Aside from "./Aside";
import Header from "./Header";
import useMenuClick from "App/model/useMenuClick";
import React from "react";
import Container from "./style/index";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import GlobalStyle from "../Shared/style/reset.js";
import { theme } from "Shared/theme/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header menuClick={toggleMenu} />
        <Container>
          <Aside isMenuClicked={isMenuClicked} />
          <Page />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

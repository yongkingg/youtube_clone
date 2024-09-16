import Aside from "./ui/Aside";
import Header from "./ui/Header";
import useMenuClick from "App/model/useMenuClick";
import React from "react";
import Container from "./style/index";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";
import GlobalStyle from "./style/reset.js";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();

  return (
    <Router>
      <GlobalStyle />
      <Header menuClick={toggleMenu} />
      <Container>
        <Aside isMenuClicked={isMenuClicked} />
        <Page />
      </Container>
    </Router>
  );
};

export default App;

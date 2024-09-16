import "../Shared/style/setting.css";
import Aside from "./ui/Aside";
import Header from "./ui/Header";
import useMenuClick from "App/model/useMenuClick";
import React from "react";
import style from "./style/index.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();

  return (
    <Router>
      <Header menuClick={toggleMenu} />
      <div className={style.container}>
        <Aside isMenuClicked={isMenuClicked} />
        <Page />
      </div>
    </Router>
  );
};

export default App;

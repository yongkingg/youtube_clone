import "../Shared/style/setting.css";
import Aside from "../Widget/Aside/Aside";
import Header from "../Widget/Header/Header";
import useMenuClick from "./lib/useMenuClick";
import useSetVideo from "../Page/lib/useSetVideo";
import React from "react";
import style from "./style/index.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../Page";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [video, setVideo] = useSetVideo();

  return (
    <Router>
      <Header menuClick={toggleMenu} />
      <div className={style.container}>
        <Aside isMenuClicked={isMenuClicked} />
        <Page video={video} setVideo={setVideo} />
      </div>
    </Router>
  );
};

export default App;

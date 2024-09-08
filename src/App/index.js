import "../Shared/style/setting.css";
import Aside from "../Widget/Aside/Aside";
import Header from "../Widget/Header/Header";
import Page from "../Page";
import useMenuClick from "./lib/useMenuClick";
import usePage from "./lib/usePage";
import React from "react";
import style from "./style/index.module.css";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [page, setPage] = usePage();
  return (
    <>
      <Header menuClick={toggleMenu} setPage={setPage} />
      <div className={style.container}>
        <Aside isMenuClicked={isMenuClicked} setPage={setPage} />
        <Page page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default App;

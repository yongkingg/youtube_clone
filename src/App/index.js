import Aside from "../Widget/Aside";
import Header from "../Widget/Header";
import Page from "../Page";
import useMenuClick from "./lib/hook/useMenuClick";
import "../Shared/style/setting.css";
import React from "react";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [page, setPage] = React.useState("main");
  return (
    <>
      <Header menuClick={toggleMenu} setPage={setPage} />
      <Aside />
      <Page page={page} setPage={setPage} />
    </>
  );
};

export default App;

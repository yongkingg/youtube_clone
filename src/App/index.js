import "../Shared/style/setting.css";
import Aside from "../Widget/Aside";
import Header from "../Widget/Header/Header";
import Page from "../Page";
import useMenuClick from "../Widget/Header/lib/useMenuClick";
import React from "react";

const App = () => {
  const [isMenuClicked, toggleMenu] = useMenuClick();
  const [page, setPage] = React.useState("main");
  return (
    <>
      <Header menuClick={toggleMenu} setPage={setPage} />
      <Aside isMenuClicked={isMenuClicked} setPage={setPage} />
    </>
  );
};

export default App;

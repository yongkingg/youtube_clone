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
      <div style={{ display: "flex", marginTop: "59px" }}>
        <Aside isMenuClicked={isMenuClicked} setPage={setPage} />
        <Page page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default App;

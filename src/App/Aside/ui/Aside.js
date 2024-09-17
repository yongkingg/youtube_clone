import OpenAside from "./OpenedAside/OpenAside";
import CloseAside from "./ClosedAside/CloseAside";
import home from "../asset/home.svg";
import home_white from "../asset/home_white.svg";

import shorts from "../asset/shorts.svg";
import shorts_white from "../asset/shorts_white.svg";

import subscribe from "../asset/subscribe.svg";
import subscribe_white from "../asset/subscribe_white.svg";

import me from "../asset/me.svg";
import me_white from "../asset/me_white.svg";

import React from "react";

const Aside = React.memo((props) => {
  const { isMenuClicked, mode } = props;

  const asideButtons = [
    {
      name: "홈",
      image: mode.bgColor == "black" ? me_white : me,
    },
    {
      name: "Shorts",
      image: mode.bgColor == "black" ? shorts_white : shorts,
    },
    {
      name: "구독",
      image: mode.bgColor == "black" ? subscribe_white : subscribe,
    },
    {
      name: "나",
      image: mode.bgColor == "black" ? me_white : me,
    },
  ];

  return (
    <>
      {isMenuClicked ? (
        <OpenAside mode={mode} buttons={asideButtons} />
      ) : (
        <CloseAside mode={mode} buttons={asideButtons} />
      )}
    </>
  );
});

export default Aside;

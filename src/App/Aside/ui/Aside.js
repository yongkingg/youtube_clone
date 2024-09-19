import shorts from "../asset/shorts.svg";
import shorts_white from "../asset/shorts_white.svg";

import subscribe from "../asset/subscribe.svg";
import subscribe_white from "../asset/subscribe_white.svg";

import me from "../asset/me.svg";
import me_white from "../asset/me_white.svg";

import React from "react";
import Style from "./style";
import useAsideClickEvent from "../model/useAsideClickEvent";

const Aside = React.memo((props) => {
  const { isMenuClicked, mode, darkColor } = props;
  const clickEvent = useAsideClickEvent();

  const asideButtons = [
    {
      name: "홈",
      image: mode.bgColor == darkColor ? me_white : me,
    },
    {
      name: "Shorts",
      image: mode.bgColor == darkColor ? shorts_white : shorts,
    },
    {
      name: "구독",
      image: mode.bgColor == darkColor ? subscribe_white : subscribe,
    },
    {
      name: "나",
      image: mode.bgColor == darkColor ? me_white : me,
    },
  ];

  return (
    <Style.Aside
      $type={isMenuClicked ? "open" : "close"}
      $bgColor={mode.bgColor}
      onClick={clickEvent}
    >
      {asideButtons.map((element, index) => (
        <Style.Buttons
          $type={isMenuClicked ? "open" : "close"}
          $color={mode.fontColor}
          data-button-id={index}
        >
          <image style={{ backgroundImage: `url(${element.image})` }} />
          <p>{element.name}</p>
        </Style.Buttons>
      ))}
    </Style.Aside>
  );
});

export default Aside;

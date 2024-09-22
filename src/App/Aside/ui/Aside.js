import React from "react";
import Style from "./style";
import useAsideClickEvent from "../model/useAsideClickEvent";

import Home from "../asset/home";
import Shorts from "../asset/shorts";
import Subscribe from "../asset/subscribe";
import Me from "../asset/me";

const Aside = React.memo((props) => {
  const { isMenuClicked } = props;
  const clickEvent = useAsideClickEvent();

  const asideButtons = [
    {
      name: "홈",
      image: Home,
    },
    {
      name: "Shorts",
      image: Shorts,
    },
    {
      name: "구독",
      image: Subscribe,
    },
    {
      name: "나",
      image: Me,
    },
  ];

  return (
    <Style.Aside $type={isMenuClicked ? true : false} onClick={clickEvent}>
      {asideButtons.map((element, index) => (
        <Style.Buttons
          key={index}
          $type={isMenuClicked ? true : false}
          data-button-id={index}
        >
          {/* <image style={{ backgroundImage: `url(${element.image})` }} /> */}
          <element.image />
          <p>{element.name}</p>
        </Style.Buttons>
      ))}
    </Style.Aside>
  );
});

export default Aside;

import React from "react";
import Style from "./style";
import useAsideClickEvent from "../model/useAsideClickEvent";

import Home from "../asset/Home";
import Shorts from "../asset/Shorts";
import Subscribe from "../asset/Subscribe";
import Me from "../asset/Me";
import useSetAside from "Shared/recoil/useSetAside";

const Aside = React.memo(() => {
  const clickEvent = useAsideClickEvent();
  const [isOpen] = useSetAside();
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
    <Style.Aside $type={isOpen ? true : false} onClick={clickEvent}>
      {asideButtons.map((element, index) => (
        <Style.Buttons
          key={index}
          $type={isOpen ? true : false}
          data-button-id={index}
        >
          <element.image />
          <p>{element.name}</p>
        </Style.Buttons>
      ))}
    </Style.Aside>
  );
});

export default Aside;

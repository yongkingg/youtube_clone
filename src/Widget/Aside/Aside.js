import OpenAside from "./OpenedAside/OpenAside";
import CloseAside from "./ClosedAside/CloseAside";
import home from "./asset/home.svg";
import shorts from "./asset/shorts.svg";
import subscribe from "./asset/subscribe.svg";
import me from "./asset/me.svg";
import React from "react";

const Aside = React.memo((props) => {
  const asideButtons = [
    {
      name: "홈",
      image: home,
    },
    {
      name: "Shorts",
      image: shorts,
    },
    {
      name: "구독",
      image: subscribe,
    },
    {
      name: "나",
      image: me,
    },
  ];

  const { isMenuClicked } = props;
  return (
    <>
      {isMenuClicked ? (
        <OpenAside buttons={asideButtons} />
      ) : (
        <CloseAside buttons={asideButtons} />
      )}
    </>
  );
});

export default Aside;

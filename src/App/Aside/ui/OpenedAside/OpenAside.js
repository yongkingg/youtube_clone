import OpenAsideButton from "./OpenAsideButton";
import React from "react";
import useAsideClickEvent from "../../model/useAsideClickEvent";
import { OpenedAside } from "./style";

const OpenAside = (props) => {
  const { buttons, mode } = props;
  console.log(mode);
  const clickEvent = useAsideClickEvent();

  return (
    <OpenedAside mode={mode.bgColor} onClick={clickEvent}>
      {buttons.map((element, index) => (
        <OpenAsideButton
          key={index}
          index={index}
          buttons={element}
          mode={mode}
        />
      ))}
    </OpenedAside>
  );
};

export default OpenAside;

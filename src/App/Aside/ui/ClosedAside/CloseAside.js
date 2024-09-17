import CloseAsideButton from "./CloseAsideButton";
import React from "react";
import useAsideClickEvent from "../../model/useAsideClickEvent";
import { ClosedAside } from "./style";

const CloseAside = (props) => {
  const { buttons, mode } = props;
  const clickEvent = useAsideClickEvent();
  return (
    <ClosedAside mode={mode.bgColor} onClick={clickEvent}>
      {buttons.map((element, index) => (
        <CloseAsideButton
          key={index}
          index={index}
          buttons={element}
          mode={mode}
        />
      ))}
    </ClosedAside>
  );
};

export default CloseAside;

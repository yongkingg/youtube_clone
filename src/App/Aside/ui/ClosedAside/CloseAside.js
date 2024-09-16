import CloseAsideButton from "./CloseAsideButton";
import React from "react";
import useAsideClickEvent from "../../model/useAsideClickEvent";
import { ClosedAside } from "./style";

const CloseAside = (props) => {
  const { buttons } = props;
  const clickEvent = useAsideClickEvent();
  return (
    <ClosedAside onClick={clickEvent}>
      {buttons.map((element, index) => (
        <CloseAsideButton key={index} index={index} buttons={element} />
      ))}
    </ClosedAside>
  );
};

export default CloseAside;

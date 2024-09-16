import CloseAsideButton from "./CloseAsideButton";
import React from "react";
import style from "./closeAside.module.css";
import { useNavigate } from "react-router-dom";
import useAsideClickEvent from "../../model/useAsideClickEvent";

const CloseAside = (props) => {
  const { buttons } = props;
  const navigate = useNavigate();
  const clickEvent = useAsideClickEvent();
  return (
    <div className={style.closed_aside} onClick={clickEvent}>
      {buttons.map((element, index) => (
        <CloseAsideButton key={index} index={index} buttons={element} />
      ))}
    </div>
  );
};

export default CloseAside;

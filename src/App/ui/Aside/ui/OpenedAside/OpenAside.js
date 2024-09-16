import OpenAsideButton from "./OpenAsideButton";
import style from "./openAside.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAsideClickEvent from "../../model/useAsideClickEvent";
const OpenAside = (props) => {
  const { buttons } = props;

  const clickEvent = useAsideClickEvent();

  return (
    <div className={style.opened_aside} onClick={clickEvent}>
      {buttons.map((element, index) => (
        <OpenAsideButton key={index} index={index} buttons={element} />
      ))}
    </div>
  );
};

export default OpenAside;

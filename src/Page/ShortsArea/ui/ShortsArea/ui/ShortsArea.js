import style from "./short.module.css";
import React from "react";
import Shorts from "../../Shorts/Shorts";
import useUpDown from "../model/useUpDown";

import { ShortsSection } from "./style";

const ShortsArea = (props) => {
  const { mode, darkColor } = props;
  const [isDownButtonClicked, setDownValue] = useUpDown();

  return (
    <ShortsSection $bgColor={mode.bgColor} onClick={setDownValue}>
      <Shorts mode={mode} darkColor={darkColor} />
      <button
        className={
          isDownButtonClicked
            ? `${style.shorts_up} ${style.svg_back} ${style.after_up_pos}`
            : `${style.shorts_up} ${style.svg_back} ${style.default_pos}`
        }
        data-id="up"
      ></button>
      <button
        className={
          isDownButtonClicked
            ? `${style.shorts_down} ${style.svg_back} ${style.after_down_pos}`
            : `${style.shorts_down} ${style.svg_back} ${style.default_pos}`
        }
        data-id="down"
      ></button>
    </ShortsSection>
  );
};

export default ShortsArea;

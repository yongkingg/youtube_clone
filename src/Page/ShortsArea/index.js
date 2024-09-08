import style from "./style/short.module.css";
import React from "react";
import Shorts from "../../Widget/Shorts/Shorts";

const ShortsArea = () => {
  const [isDownButtonClicked, setDownValue] = React.useState(false);
  const clickEvent = (e) => {
    try {
      const clickedBtn = e.target.closest("[data-id]").dataset.id;
      switch (clickedBtn) {
        case "up":
          break;
        case "down":
          setDownValue(!isDownButtonClicked);
          break;
      }
    } catch (e) {}
  };
  return (
    <section className={style.shorts_area} onClick={clickEvent}>
      <Shorts />
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
    </section>
  );
};

export default ShortsArea;

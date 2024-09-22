import React from "react";
import Shorts from "../Shorts/ui/Shorts";
import useUpDown from "../model/useUpDown";
import up from "Page/ShortsArea/asset/up.svg";
import down from "Page/ShortsArea/asset/down.svg";
import Style from "./style";
const ShortsArea = (props) => {
  const { mode, darkColor } = props;
  const [isDownButtonClicked, setDownValue] = useUpDown();

  return (
    <Style.Container onClick={setDownValue}>
      <Shorts mode={mode} darkColor={darkColor} />
      <Style.Button
        $type="up"
        $image={up}
        $animation={isDownButtonClicked ? "up" : ""}
        data-id="up"
      ></Style.Button>
      <Style.Button
        $type="up"
        $image={down}
        $animation={isDownButtonClicked ? "down" : ""}
        data-id="down"
      ></Style.Button>
    </Style.Container>
  );
};

export default ShortsArea;

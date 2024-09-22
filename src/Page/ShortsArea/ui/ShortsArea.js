import React from "react";
import Shorts from "../Shorts/ui/Shorts";
import useUpDown from "../model/useUpDown";
import { Up } from "../asset/up";
import { Down } from "../asset/down";
import Style from "./style";
const ShortsArea = () => {
  const [isDownButtonClicked, setDownValue] = useUpDown();

  return (
    <Style.Container onClick={setDownValue}>
      <Shorts />
      <Style.Button
        $type="up"
        $animation={isDownButtonClicked ? "up" : ""}
        data-id="up"
      >
        <Up />
      </Style.Button>
      <Style.Button
        $type="up"
        $animation={isDownButtonClicked ? "down" : ""}
        data-id="down"
      >
        <Down />
      </Style.Button>
    </Style.Container>
  );
};

export default ShortsArea;

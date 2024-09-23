import voice_black from "./voice_black.svg";
import voice_white from "./voice_white.svg";
import { useTheme } from "styled-components";

const Voice = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? voice_black : voice_black;
  return <img src={icon} />;
};

export default Voice;

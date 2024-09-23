import { useTheme } from "styled-components";
import play_black from "./play_black.svg";
import play_white from "./play_white.svg";

const Play = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? play_black : play_white;
  return <img src={icon} />;
};

export default Play;

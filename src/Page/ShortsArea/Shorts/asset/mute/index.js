import { useTheme } from "styled-components";
import mute_black from "./mute_black.svg";
import mute_white from "./mute_white.svg";

const Mute = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? mute_black : mute_white;
  return <img src={icon} />;
};

export default Mute;

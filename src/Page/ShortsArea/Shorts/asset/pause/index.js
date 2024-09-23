import { useTheme } from "styled-components";
import pause_black from "./pause_black.svg";
import pause_white from "./pause_white.svg";

const Pause = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? pause_black : pause_white;
  return <img src={icon} />;
};

export default Pause;

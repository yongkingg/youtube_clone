import { useTheme } from "styled-components";
import pause_black from "./pause_black.svg";
import pause_white from "./pause_white.svg";
import { color } from "App/style/theme";
const Pause = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? pause_black : pause_white;
  return <img src={icon} />;
};

export default Pause;

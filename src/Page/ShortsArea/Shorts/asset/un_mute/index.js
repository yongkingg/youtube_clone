import { useTheme } from "styled-components";
import un_mute_white from "./un_mute_white.svg";
import un_mute_black from "./un_mute_black.svg";
import { color } from "App/style/theme";

const UnMute = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? un_mute_black : un_mute_white;
  return <img src={icon} />;
};

export default UnMute;

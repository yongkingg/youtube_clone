import { useTheme } from "styled-components";
import share_black from "./share_black.svg";
import share_white from "./share_white.svg";
import { color } from "App/style/theme";

const Share = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? share_black : share_white;
  return <img src={icon} />;
};

export default Share;

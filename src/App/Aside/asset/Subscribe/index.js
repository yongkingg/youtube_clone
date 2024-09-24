import subscribe_white from "./subscribe_white.svg";
import subscribe_black from "./subscribe_black.svg";
import { useTheme } from "styled-components";
import { color } from "App/style/theme";

const Subscribe = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == color.dark ? subscribe_black : subscribe_white;
  return <img src={icon} />;
};

export default Subscribe;

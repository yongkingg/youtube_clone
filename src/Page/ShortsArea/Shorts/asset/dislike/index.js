import { useTheme } from "styled-components";
import dislike_black from "./dislike_black.svg";
import dislike_white from "./dislike_white.svg";
import { color } from "App/style/theme";

const Dislike = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? dislike_black : dislike_white;
  return <img src={icon} />;
};

export default Dislike;

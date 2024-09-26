import { useTheme } from "styled-components";
import like_white from "./like_white.svg";
import like_black from "./like_black.svg";
import { color } from "App/style/theme";
const Like = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? like_black : like_white;

  return <img src={icon} />;
};

export default Like;

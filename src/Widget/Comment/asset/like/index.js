import like_black from "./like_black.svg";
import like_white from "./like_white.svg";
import { useTheme } from "styled-components";

const Like = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? like_black : like_white;
  return <img src={icon} />;
};

export default Like;

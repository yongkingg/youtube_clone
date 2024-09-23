import avatar_black from "./avatar_black.svg";
import avatar_white from "./avatar_white.svg";
import { useTheme } from "styled-components";

const Avatar = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? avatar_black : avatar_white;
  return <img src={icon} />;
};

export default Avatar;

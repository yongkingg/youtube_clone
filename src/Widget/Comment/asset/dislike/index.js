import dislike_black from "./dislike_black.svg";
import dislike_white from "./dislike_white.svg";
import { useTheme } from "styled-components";

const Dislike = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? dislike_black : dislike_white;
  return <img src={icon} />;
};

export default Dislike;

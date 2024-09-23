import youtube_black from "./youtube_black.svg";
import youtube_white from "./youtube_white.svg";
import { useTheme } from "styled-components";

const Youtube = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? youtube_black : youtube_white;
  return <img src={icon} />;
};

export default Youtube;

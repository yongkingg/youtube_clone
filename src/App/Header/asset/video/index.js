import { color } from "App/style/theme";
import video_black from "./video_black.svg";
import video_white from "./video_white.svg";
import { useTheme } from "styled-components";

const Video = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? video_black : video_white;
  return <img src={icon} />;
};

export default Video;

import { useTheme } from "styled-components";
import comment_icon_white from "./comment_icon_white.svg";
import comment_icon_black from "./comment_icon_black.svg";
import { color } from "App/style/theme";

const CommentIcon = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == color.dark ? comment_icon_black : comment_icon_white;

  return <img src={icon} />;
};

export default CommentIcon;

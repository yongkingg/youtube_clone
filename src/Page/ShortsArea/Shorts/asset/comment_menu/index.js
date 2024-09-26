import { useTheme } from "styled-components";
import comment_menu_black from "./comment_menu_black.svg";
import comment_menu_white from "./comment_menu_white.svg";
import { color } from "App/style/theme";

const CommentMenu = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == color.dark ? comment_menu_black : comment_menu_white;

  return <img src={icon} />;
};

export default CommentMenu;

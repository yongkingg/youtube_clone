import { useTheme } from "styled-components";
import comment_exit_black from "./comment_exit_black.svg";
import comment_exit_white from "./comment_exit_white.svg";

const CommentExit = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)"
      ? comment_exit_black
      : comment_exit_white;
  return <img src={icon} />;
};

export default CommentExit;

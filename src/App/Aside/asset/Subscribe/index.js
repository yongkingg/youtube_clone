import subscribe_white from "./subscribe_white.svg";
import subscribe_black from "./subscribe_black.svg";
import { useTheme } from "styled-components";

const Subscribe = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? subscribe_black : subscribe_white;
  return <img src={icon} />;
};

export default Subscribe;

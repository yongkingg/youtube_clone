import { useTheme } from "styled-components";
import share_black from "./share_black.svg";
import share_white from "./share_white.svg";

const Share = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? share_black : share_white;
  return <img src={icon} />;
};

export default Share;

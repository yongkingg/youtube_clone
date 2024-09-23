import { useTheme } from "styled-components";
import shorts_black from "./shorts_black.svg";
import shorts_white from "./shorts_white.svg";

const Shorts = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? shorts_black : shorts_white;
  return <img src={icon} />;
};
export default Shorts;

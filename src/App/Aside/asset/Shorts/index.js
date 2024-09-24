import { useTheme } from "styled-components";
import shorts_black from "./shorts_black.svg";
import shorts_white from "./shorts_white.svg";
import { color } from "App/style/theme";

const Shorts = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? shorts_black : shorts_white;
  return <img src={icon} />;
};
export default Shorts;

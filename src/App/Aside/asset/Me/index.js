import { useTheme } from "styled-components";
import me_black from "./me_black.svg";
import me_white from "./me_white.svg";
import { color } from "App/style/theme";
const Me = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? me_black : me_white;
  return <img src={icon} />;
};

export default Me;

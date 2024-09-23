import { useTheme } from "styled-components";
import me_black from "./me_black.svg";
import me_white from "./me_white.svg";
const Me = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? me_black : me_white;
  return <img src={icon} />;
};

export default Me;

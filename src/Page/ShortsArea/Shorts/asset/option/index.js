import { useTheme } from "styled-components";
import option_black from "./option_black.svg";
import option_white from "./option_white.svg";
import { color } from "App/style/theme";
const Option = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? option_black : option_white;
  return <img src={icon} />;
};

export default Option;

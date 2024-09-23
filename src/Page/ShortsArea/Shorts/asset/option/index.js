import { useTheme } from "styled-components";
import option_black from "./option_black.svg";
import option_white from "./option_white.svg";

const Option = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? option_black : option_white;
  return <img src={icon} />;
};

export default Option;

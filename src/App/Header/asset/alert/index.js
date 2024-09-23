import { useTheme } from "styled-components";
import alert_black from "./alert_black.svg";
import alert_white from "./alert_white.svg";

const Alert = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? alert_black : alert_white;
  return <img src={icon} />;
};

export default Alert;

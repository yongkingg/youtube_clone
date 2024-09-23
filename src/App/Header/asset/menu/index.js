import menu_black from "./menu_black.svg";
import menu_white from "./menu_white.svg";
import { useTheme } from "styled-components";

const Menu = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? menu_black : menu_white;
  return <img src={icon} />;
};

export default Menu;

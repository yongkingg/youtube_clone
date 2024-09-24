import { color } from "App/style/theme";
import menu_black from "./menu_black.svg";
import menu_white from "./menu_white.svg";
import { useTheme } from "styled-components";

const Menu = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? menu_black : menu_white;
  return <img src={icon} />;
};

export default Menu;

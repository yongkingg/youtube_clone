import { useTheme } from "styled-components";
import home_black from "./home_black.svg";
import home_white from "./home_white.svg";
import { color } from "App/style/theme";

const Home = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? home_black : home_white;
  return <img src={icon} />;
};

export default Home;

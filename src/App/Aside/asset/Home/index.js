import { useTheme } from "styled-components";
import home_black from "./home_black.svg";
import home_white from "./home_white.svg";

const Home = () => {
  const theme = useTheme();
  const icon = theme.iconColor == "var(--dark-color)" ? home_black : home_white;
  return <img src={icon} />;
};

export default Home;

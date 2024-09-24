import search_white from "./search_white.svg";
import search_black from "./search_black.svg";
import { useTheme } from "styled-components";
import { color } from "App/style/theme";

const Search = () => {
  const theme = useTheme();
  const icon = theme.iconColor == color.dark ? search_black : search_black;
  return <img src={icon} />;
};

export default Search;

import search_white from "./search_white.svg";
import search_black from "./search_black.svg";
import { useTheme } from "styled-components";

const Search = () => {
  const theme = useTheme();
  const icon =
    theme.iconColor == "var(--dark-color)" ? search_black : search_white;
  return <img src={icon} />;
};

export default Search;

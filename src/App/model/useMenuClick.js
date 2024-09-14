import React from "react";

const useMenuClick = () => {
  const [isMenuClicked, setMenuClicked] = React.useState(false);

  const toggleMenu = () => {
    setMenuClicked((prev) => !prev);
  };

  return [isMenuClicked, toggleMenu];
};

export default useMenuClick;

import React, { useEffect } from "react";
import { dark, light } from "../style/theme";

export const useSwitchTheme = () => {
  const [mode, setMode] = React.useState(light);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme === "dark" ? dark : light);
    }
  }, []);

  const switchTheme = () => {
    const newMode = mode === light ? dark : light;
    setMode(newMode);
    localStorage.setItem("theme", newMode === dark ? "dark" : "light");
  };

  return [mode, switchTheme];
};

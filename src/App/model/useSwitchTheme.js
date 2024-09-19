import React, { useEffect } from "react";
import { theme } from "Shared/style/themes";

export const useSwitchTheme = () => {
  const [mode, setMode] = React.useState(theme.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme === "dark" ? theme.dark : theme.light);
    }
  }, []);

  const switchTheme = () => {
    const newMode = mode === theme.light ? theme.dark : theme.light;
    setMode(newMode);
    localStorage.setItem("theme", newMode === theme.dark ? "dark" : "light");
  };

  return [mode, switchTheme];
};

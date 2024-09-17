import React from "react";
import { theme } from "Shared/style/themes";

export const useSwitchTheme = () => {
  const [mode, setMode] = React.useState(theme.light);

  const switchTheme = () => {
    setMode((prevMode) =>
      prevMode === theme.light ? theme.dark : theme.light
    );
  };
  return [mode, switchTheme];
};

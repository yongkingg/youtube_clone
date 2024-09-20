import React from "react";

const useUpDown = () => {
  const [isDownButtonClicked, setDownValue] = React.useState(false);

  const clickEvent = (e) => {
    try {
      const clickedBtn = e.target.closest("[data-id]").dataset.id;
      switch (clickedBtn) {
        case "up":
          break;
        case "down":
          setDownValue(!isDownButtonClicked);
          break;
      }
    } catch (e) {}
  };

  return [isDownButtonClicked, clickEvent];
};

export default useUpDown;

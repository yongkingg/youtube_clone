import React from "react";

export const useSwitchClick = () => {
  const [isPlay, setPlay] = React.useState(true);
  const [isMute, setMute] = React.useState(false);
  const [isCommentBtnClicked, openComment] = React.useState(null);

  const switchClickEvent = (e) => {
    try {
      const clickedBtn = e.target.closest("[data-id]").dataset.id;
      switch (clickedBtn) {
        case "play":
          setPlay(!isPlay);
          break;
        case "mute":
          setMute(!isMute);
          break;
        case "exit_comment":
        case "commentCount":
          if (isCommentBtnClicked == null) {
            openComment(true);
          } else {
            openComment(!isCommentBtnClicked);
          }
          break;
      }
    } catch (e) {}
  };
  return [isPlay, isMute, isCommentBtnClicked, switchClickEvent];
};

import style from "./style/shorts.module.css";
import React from "react";
import useShortData from "./lib/useShortData";
import ShortsButton from "./shortsButton/shortsButton";
import HoverButton from "Shared/components/HoverButton";
import Comment from "Widget/Comment/ui/Comment";
import avatar from "Shared/asset/avatar.svg";

const Shorts = React.memo(() => {
  const [isCommentBtnClicked, openComment] = React.useState(null);
  const [isPlay, setPlay] = React.useState(true);
  const [isMute, setMute] = React.useState(false);
  const [shortsData] = useShortData();

  const interactionBtn = [
    {
      id: "like",
      className: "shorts_like",
    },
    {
      id: "disLike",
      className: "shorts_dislike",
    },
    {
      id: "commentCount",
      className: "shorts_comment",
    },
    {
      id: "share",
      className: "shorts_share",
    },
    {
      id: "option",
      className: "shorts_option",
    },
  ];

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

  return (
    <div className={`${style.shorts_container}`} onClick={switchClickEvent}>
      <div
        className={`${
          isCommentBtnClicked == null
            ? `${style.shorts}`
            : isCommentBtnClicked
            ? `${style.shorts} ${style.shorts_slide_left}`
            : `${style.shorts} ${style.shorts_slide_right}`
        }`}
      >
        <div className={`${style.shorts_button_container}`}>
          <button
            data-id="play"
            className={`${isPlay ? style.play : style.pause}`}
          ></button>
          <button
            data-id="mute"
            className={`${isMute ? style.mute : style.un_mute}`}
          ></button>
        </div>

        <div className={`${style.shorts_info_container}`}>
          <div className={`${style.shorts_owner_box} ${style.svg_back}`}>
            <img></img>
            <h1>@{shortsData.account}</h1>
            <button>구독</button>
          </div>
          <p className={style.shorts_title}>{shortsData.title}</p>
        </div>

        <div
          className={
            !isCommentBtnClicked
              ? `${style.shorts_interaction_box} ${style.closed_interaction_box}`
              : `${style.shorts_interaction_box} ${style.opened_interaction_box}`
          }
        >
          {interactionBtn.map((element, index) => {
            return (
              <div data-id={element.id}>
                <ShortsButton key={index} getClass={element.className} />
                {shortsData[element.id] && (
                  <p className={style.shorts_interaction_text}>
                    {shortsData[element.id]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          isCommentBtnClicked == null
            ? `${style.shorts_comment_box}`
            : isCommentBtnClicked
            ? `${style.shorts_comment_box} ${style.comment_slide_right}`
            : `${style.shorts_comment_box} ${style.comment_slide_left}`
        }`}
      >
        <div className={style.comment_tool_container}>
          <h1>댓글</h1>
          <h3>{shortsData.commentCount}</h3>
          <button className={style.menu_button}></button>
          <button className={style.exit_button} data-id="exit_comment"></button>
        </div>
        {
          <div className={style.comment_list}>
            {Object.keys(shortsData).length ? (
              shortsData.comment.map((element, index) => {
                return <Comment key={index} element={element} />;
              })
            ) : (
              <p>로딩중</p>
            )}
          </div>
        }
        {
          <div className={style.comment_input_container}>
            <HoverButton imageUrl={avatar} />
            <input placeholder="댓글 추가..."></input>
          </div>
        }
      </div>
    </div>
  );
});

export default Shorts;

// shortsarea 안쪽으로 들어가는게 맞음
// 왼쪽을 commentArea를 가져오는걸로 수정하고, commentArea에 comment 넣는게 맞음.

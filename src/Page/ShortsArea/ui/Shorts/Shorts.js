import style from "./style/shorts.module.css";
import React from "react";
import useShortData from "./shortsButton/lib/useShortData";
import ShortsButton from "./shortsButton/shortsButton";
import Comment from "Widget/Comment/ui/Comment";
import CommentInput from "Widget/CommentInput";
import {
  ShortsContainer,
  CommentToolContainer,
  ToolBtn,
  CommentList,
} from "./style";

import comment_exit_black from "../Shorts/asset/comment_exit.svg";
import comment_exit_white from "../Shorts/asset/comment_exit_white.svg";

import comment_menu from "../Shorts/asset/comment_menu.svg";
import comment_menu_white from "../Shorts/asset/comment_menu_white.svg";

import { useSwitchClick } from "./model/useSwitchClick";
const Shorts = React.memo((props) => {
  const { mode, darkColor } = props;
  const [shortsData] = useShortData();
  const [isPlay, isMute, isCommentBtnClicked, switchClickEvent] =
    useSwitchClick();

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

  return (
    <ShortsContainer onClick={switchClickEvent}>
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
        <CommentToolContainer
          $bgColor={mode.bgColor}
          $fontColor={mode.fontColor}
        >
          <h1>댓글</h1>
          <h3>{shortsData.commentCount}</h3>
          <ToolBtn
            $type="menu"
            $image={
              mode.bgColor == darkColor ? comment_menu_white : comment_menu
            }
          ></ToolBtn>
          <ToolBtn
            $type="exit"
            $image={
              mode.bgColor == darkColor
                ? comment_exit_white
                : comment_exit_black
            }
          ></ToolBtn>
        </CommentToolContainer>
        {
          <CommentList $bgColor={mode.bgColor}>
            {Object.keys(shortsData).length ? (
              shortsData.comment.map((element, index) => {
                return (
                  <Comment
                    key={index}
                    element={element}
                    mode={mode}
                    darkColor={darkColor}
                  />
                );
              })
            ) : (
              <p>로딩중</p>
            )}
          </CommentList>
        }
        {<CommentInput mode={mode} darkColor={darkColor} />}
      </div>
    </ShortsContainer>
  );
});

export default Shorts;

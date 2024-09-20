import React from "react";
import useShortData from "../model/useShortData";
import Comment from "Widget/Comment/ui/Comment";
import CommentInput from "Widget/CommentInput";

import comment_exit_black from "../asset/comment_exit.svg";
import comment_exit_white from "../asset/comment_exit_white.svg";

import comment_menu from "../asset/comment_menu.svg";
import comment_menu_white from "../asset/comment_menu_white.svg";

import { useSwitchClick } from "../model/useSwitchClick";

import like from "../asset/shorts_like.svg";
import dislike from "../asset/shorts_dislike.svg";
import comment from "../asset/comment.svg";
import share from "../asset/share.svg";
import option from "../asset/option.svg";
import play from "../asset/play.svg";
import pause from "../asset/pause.svg";
import mute from "../asset/mute.svg";
import un_mute from "../asset/un_mute.svg";

import Style from "./style";

const Shorts = React.memo((props) => {
  const { mode, darkColor } = props;
  const [shortsData] = useShortData();
  const [isPlay, isMute, isCommentBtnClicked, switchClickEvent] =
    useSwitchClick();

  const interactionBtn = [
    {
      id: "like",
      image: like,
    },
    {
      id: "disLike",
      image: dislike,
    },
    {
      id: "commentCount",
      image: comment,
    },
    {
      id: "share",
      image: share,
    },
    {
      id: "option",
      image: option,
    },
  ];

  return (
    <Style.Container $type="shorts" onClick={switchClickEvent}>
      <Style.Main $type="shorts" $animation={isCommentBtnClicked}>
        <Style.Container $type="button">
          <Style.ToolBtn
            $width="48px"
            $height="48px"
            $bgColor="black"
            $image={isPlay ? play : pause}
            data-id="play"
          ></Style.ToolBtn>
          <Style.ToolBtn
            $width="48px"
            $height="48px"
            $bgColor="black"
            $image={isMute ? mute : un_mute}
            data-id="mute"
          ></Style.ToolBtn>
        </Style.Container>

        <Style.Container $type="info">
          <Style.Container $type="shorts_owner_box">
            <img></img>
            <h1>@{shortsData.account}</h1>
            <button>구독</button>
          </Style.Container>
          <p>{shortsData.title}</p>
        </Style.Container>

        <Style.Container $type="interaction" $animation={!isCommentBtnClicked}>
          {interactionBtn.map((element, index) => {
            return (
              <div data-id={element.id}>
                <Style.ToolBtn
                  key={index}
                  $width="48px"
                  $height="48px"
                  $bgColor="black"
                  $image={element.image}
                />
                {shortsData[element.id] && <p>{shortsData[element.id]}</p>}
              </div>
            );
          })}
        </Style.Container>
      </Style.Main>

      <Style.Main $type="comment" $animation={isCommentBtnClicked}>
        <Style.Container
          $type="comment_tool"
          $bgColor={mode.bgColor}
          $fontColor={mode.fontColor}
        >
          <h1>댓글</h1>
          <h3>{shortsData.commentCount}</h3>
          <Style.ToolBtn
            $type="menu"
            $width="40px"
            $height="40px"
            $image={
              mode.bgColor == darkColor ? comment_menu_white : comment_menu
            }
          ></Style.ToolBtn>
          <Style.ToolBtn
            $width="40px"
            $height="40px"
            $image={
              mode.bgColor == darkColor
                ? comment_exit_white
                : comment_exit_black
            }
          ></Style.ToolBtn>
        </Style.Container>
        {
          <Style.Container $type="comment_list" $bgColor={mode.bgColor}>
            {Object.keys(shortsData).length ? (
              shortsData.comment.map((element, index) => {
                return (
                  <Comment
                    key={index}
                    $type={element.id}
                    element={element}
                    mode={mode}
                    darkColor={darkColor}
                  />
                );
              })
            ) : (
              <p>로딩중</p>
            )}
          </Style.Container>
        }
        {<CommentInput mode={mode} darkColor={darkColor} />}
      </Style.Main>
    </Style.Container>
  );
});

export default Shorts;

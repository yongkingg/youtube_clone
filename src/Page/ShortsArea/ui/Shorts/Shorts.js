import React from "react";
import useShortData from "./shortsButton/lib/useShortData";
import Comment from "Widget/Comment/ui/Comment";
import CommentInput from "Widget/CommentInput";

import { ShortsBox, ToolBtn, CommentList, Container } from "./style";

import comment_exit_black from "../Shorts/asset/comment_exit.svg";
import comment_exit_white from "../Shorts/asset/comment_exit_white.svg";

import comment_menu from "../Shorts/asset/comment_menu.svg";
import comment_menu_white from "../Shorts/asset/comment_menu_white.svg";

import { useSwitchClick } from "./model/useSwitchClick";

import like from "../Shorts/asset/shorts_like.svg";
import dislike from "../Shorts/asset/shorts_dislike.svg";
import comment from "../Shorts/asset/comment.svg";
import share from "../Shorts/asset/share.svg";
import option from "../Shorts/asset/option.svg";
import play from "../Shorts/asset/play.svg";
import pause from "../Shorts/asset/pause.svg";
import mute from "../Shorts/asset/mute.svg";
import un_mute from "../Shorts/asset/un_mute.svg";

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
    <Container $type="shorts" onClick={switchClickEvent}>
      <ShortsBox $animation={isCommentBtnClicked}>
        <Container $type="button">
          <ToolBtn
            $width="48px"
            $height="48px"
            $image={isPlay ? play : pause}
            data-id="play"
          ></ToolBtn>
          <ToolBtn
            $width="48px"
            $height="48px"
            $image={isMute ? mute : un_mute}
            data-id="mute"
          ></ToolBtn>
        </Container>

        <Container $type="info">
          <Container $type="shorts_owner_box">
            <img></img>
            <h1>@{shortsData.account}</h1>
            <button>구독</button>
          </Container>
          <p>{shortsData.title}</p>
        </Container>

        <Container $type="interaction" $animation={!isCommentBtnClicked}>
          {interactionBtn.map((element, index) => {
            return (
              <div data-id={element.id}>
                <ToolBtn
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
        </Container>
      </ShortsBox>

      <Container $type="comment" $animation={isCommentBtnClicked}>
        <Container
          $type="comment_tool"
          $bgColor={mode.bgColor}
          $fontColor={mode.fontColor}
        >
          <h1>댓글</h1>
          <h3>{shortsData.commentCount}</h3>
          <ToolBtn
            $type="menu"
            $width="40px"
            $height="40px"
            $image={
              mode.bgColor == darkColor ? comment_menu_white : comment_menu
            }
          ></ToolBtn>
          <ToolBtn
            $width="40px"
            $height="40px"
            $image={
              mode.bgColor == darkColor
                ? comment_exit_white
                : comment_exit_black
            }
          ></ToolBtn>
        </Container>
        {
          <Container $type="comment_list" $bgColor={mode.bgColor}>
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
          </Container>
        }
        {<CommentInput mode={mode} darkColor={darkColor} />}
      </Container>
    </Container>
  );
});

export default Shorts;

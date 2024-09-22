import React from "react";
import useShortData from "../model/useShortData";
import Comment from "Widget/Comment/ui/Comment";
import CommentInput from "Widget/CommentInput";

import { useSwitchClick } from "../model/useSwitchClick";

import Style from "./style";

import { ShortsLike } from "../asset/shorts_like";
import { ShortsDislike } from "../asset/shorts_dislike";
import { CommentExit } from "../asset/comment_exit";
import { CommentMenu } from "../asset/comment_menu";
import { CommentIcon } from "../asset/comment_icon";
import { Mute } from "../asset/mute";
import { UnMute } from "../asset/un_mute";
import { Dislike } from "Widget/Comment/asset/dislike";
import { Share } from "../asset/share";
import { Option } from "../asset/option";
import { Play } from "../asset/play";
import { Pause } from "../asset/pause";

const Shorts = React.memo(() => {
  const [shortsData] = useShortData();
  const [isPlay, isMute, isCommentBtnClicked, switchClickEvent] =
    useSwitchClick();

  const interactionBtn = [
    {
      id: "like",
      image: <ShortsLike />,
    },
    {
      id: "disLike",
      image: <Dislike />,
    },
    {
      id: "commentCount",
      image: <CommentIcon />,
    },
    {
      id: "share",
      image: <Share />,
    },
    {
      id: "option",
      image: <Option />,
    },
  ];

  return (
    <Style.Container $type="shorts" onClick={switchClickEvent}>
      <Style.Main $type="shorts" $animation={isCommentBtnClicked}>
        <Style.Container $type="button">
          <Style.ToolBtn $width="48px" $height="48px" data-id="play">
            {isPlay ? <Play /> : <Pause />}
          </Style.ToolBtn>
          <Style.ToolBtn $width="48px" $height="48px" data-id="mute">
            {isMute ? <Mute /> : <UnMute />}
          </Style.ToolBtn>
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
                <Style.ToolBtn key={index} $width="48px" $height="48px">
                  {element.image}
                </Style.ToolBtn>
                {shortsData[element.id] && <p>{shortsData[element.id]}</p>}
              </div>
            );
          })}
        </Style.Container>
      </Style.Main>

      <Style.Main $type="comment" $animation={isCommentBtnClicked}>
        <Style.Container $type="comment_tool">
          <h1>댓글</h1>
          <h3>{shortsData.commentCount}</h3>
          <Style.ToolBtn $type="menu" $width="40px" $height="40px">
            <CommentMenu />
          </Style.ToolBtn>
          <Style.ToolBtn $width="40px" $height="40px">
            <CommentExit />
          </Style.ToolBtn>
        </Style.Container>
        {
          <Style.Container $type="comment_list">
            {Object.keys(shortsData).length ? (
              shortsData.comment.map((element, index) => {
                return <Comment key={index} element={element} />;
              })
            ) : (
              <p>로딩중</p>
            )}
          </Style.Container>
        }
        {<CommentInput />}
      </Style.Main>
    </Style.Container>
  );
});

export default Shorts;

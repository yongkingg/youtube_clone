import avatar from "Shared/asset/avatar_white.svg";
import avatar_black from "Shared/asset/avatar_black.svg";

import like from "../asset/like.svg";
import like_dark from "../asset/like_dark.svg";

import dislike from "../asset/dislike.svg";
import dislike_dark from "../asset/dislike_dark.svg";

import {
  CommentBox,
  CommentContent,
  CommentWriter,
  CommentText,
  CommentLikeContainer,
  CommentAvatar,
  LikeCount,
  FeedBackBtn,
  ReComment,
} from "./style";

const Comment = (props) => {
  const { element, mode, darkColor } = props;

  return (
    <CommentBox>
      <CommentAvatar
        style={{
          backgroundImage: `url(${
            mode.bgColor == darkColor ? avatar : avatar_black
          })`,
        }}
      ></CommentAvatar>
      <CommentContent>
        <CommentWriter $fontColor={mode.fontColor}>
          {element.writer}
        </CommentWriter>
        <CommentText $fontColor={mode.fontColor}>{element.content}</CommentText>
        <CommentLikeContainer>
          <>
            <FeedBackBtn
              $btnImg={mode.bgColor == darkColor ? like_dark : like}
            ></FeedBackBtn>
            <LikeCount $fontColor={mode.fontColor}>{element.like}</LikeCount>
          </>
          <FeedBackBtn
            $btnImg={mode.bgColor == darkColor ? dislike_dark : dislike}
          ></FeedBackBtn>
          <ReComment $fontColor={mode.fontColor}>답글</ReComment>
        </CommentLikeContainer>
      </CommentContent>
    </CommentBox>
  );
};

export default Comment;

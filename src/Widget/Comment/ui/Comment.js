import avatar from "Shared/asset/avatar_white.svg";
import avatar_black from "Shared/asset/avatar_black.svg";

import like from "../asset/like.svg";
import like_dark from "../asset/like_dark.svg";

import dislike from "../asset/dislike.svg";
import dislike_dark from "../asset/dislike_dark.svg";

import Style from "./style";

const Comment = (props) => {
  const { element, mode, darkColor } = props;

  return (
    <Style.Container $type="comment">
      <Style.Button
        $type="avatar"
        $image={mode.bgColor == darkColor ? avatar : avatar_black}
      ></Style.Button>
      <Style.Comment>
        <Style.Text $type="comment_writer" $fontColor={mode.fontColor}>
          {element.writer}
        </Style.Text>
        <Style.Text $type="comment_text" $fontColor={mode.fontColor}>
          {element.content}
        </Style.Text>
        <Style.Container $type="feedback">
          <>
            <Style.Button
              $type="feedback"
              $btnImg={mode.bgColor == darkColor ? like_dark : like}
            ></Style.Button>
            <Style.Text $fontColor={mode.fontColor}>{element.like}</Style.Text>
          </>
          <Style.Button
            $type="feedback"
            $btnImg={mode.bgColor == darkColor ? dislike_dark : dislike}
          ></Style.Button>
          <Style.Button $type="re_comment" $fontColor={mode.fontColor}>
            답글
          </Style.Button>
        </Style.Container>
      </Style.Comment>
    </Style.Container>
  );
};

export default Comment;

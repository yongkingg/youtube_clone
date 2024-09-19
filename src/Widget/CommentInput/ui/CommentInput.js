import HoverButton from "Shared/components/HoverButton";

import avatar_black from "Shared/asset/avatar_black.svg";
import avatar_white from "Shared/asset/avatar_white.svg";

import { CommentInputContainer } from "./style";
const CommentInput = (props) => {
  const { mode, darkColor } = props;
  return (
    <CommentInputContainer $bgColor={mode.bgColor}>
      <HoverButton
        imageUrl={mode.bgColor == darkColor ? avatar_white : avatar_black}
      />
      <input placeholder="댓글 추가..." />
    </CommentInputContainer>
  );
};

export default CommentInput;

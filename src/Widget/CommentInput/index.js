import Style from "./style";
import avatar_black from "Shared/asset/avatar_black.svg";
import avatar_white from "Shared/asset/avatar_white.svg";

const CommentInput = (props) => {
  const { mode, darkColor } = props;
  return (
    <Style.Container $bgColor={mode.bgColor}>
      <Style.Button
        $type="hover"
        $image={mode.bgColor == darkColor ? avatar_white : avatar_black}
      />
      <input placeholder="댓글 추가..." />
    </Style.Container>
  );
};

export default CommentInput;

import Style from "./style";
import { Avatar } from "Shared/asset/avatar";

const CommentInput = () => {
  return (
    <Style.Container>
      <Style.Button $type="hover" />
      <Avatar />
      <input placeholder="댓글 추가..." />
    </Style.Container>
  );
};

export default CommentInput;

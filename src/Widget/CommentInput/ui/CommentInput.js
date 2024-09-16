import HoverButton from "Shared/components/HoverButton";
import avatar from "Shared/asset/avatar.svg";
import style from "./CommentInput.module.css";

const CommentInput = () => {
  return (
    <div className={style.comment_input_container}>
      <HoverButton imageUrl={avatar} />
      <input placeholder="댓글 추가..." />
    </div>
  );
};

export default CommentInput;

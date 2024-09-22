import Style from "./style";
import { Avatar } from "Shared/asset/avatar";
import { Like } from "../asset/like";
import { Dislike } from "../asset/dislike";
const Comment = (props) => {
  const { element } = props;

  return (
    <Style.Container $type="comment">
      <Style.Button $type="avatar">
        <Avatar />
      </Style.Button>
      <Style.Comment>
        <Style.Text $type="comment_writer">{element.writer}</Style.Text>
        <Style.Text $type="comment_text">{element.content}</Style.Text>
        <Style.Container $type="feedback">
          <>
            <Style.Button $type="feedback">
              <Like />
            </Style.Button>
            <Style.Text>{element.like}</Style.Text>
          </>
          <Style.Button $type="feedback">
            <Dislike />
          </Style.Button>
          <Style.Button $type="re_comment">답글</Style.Button>
        </Style.Container>
      </Style.Comment>
    </Style.Container>
  );
};

export default Comment;

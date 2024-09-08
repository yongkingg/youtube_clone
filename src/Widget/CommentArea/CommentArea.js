import useCommentData from "./lib/useCommentData";
import HoverButton from "../../Shared/components/HoverButton";
import Comment from "../../Shared/components/Comment/Comment";
import style from "./style/commentArea.module.css";
import avatar from "../../Shared/asset/avatar.svg";
const CommentArea = () => {
  const [commentList] = useCommentData(3);

  return (
    <section className={style.container}>
      <>
        <h1 className={style.comment_count}>댓글 {commentList.length}개</h1>
        <div className={style.comment_input_box}>
          <HoverButton imageUrl={avatar} />
          <input></input>
          <div className={style.input_line}></div>
          <p className={style.placeholder}>댓글 추가</p>
        </div>
        <main className={style.comment_area}>
          {commentList.length > 0 ? (
            commentList.map((element, index) => {
              return <Comment key={index} element={element} />;
            })
          ) : (
            <p>로딩</p>
          )}
        </main>
      </>
    </section>
  );
};

export default CommentArea;

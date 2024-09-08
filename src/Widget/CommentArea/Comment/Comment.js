import style from "./style/comment.module.css";

const Comment = (props) => {
  const { element } = props;
  console.log(element.writerIcon);

  return (
    <div className={style.comment}>
      <button
        className={style.comment_avatar}
        style={{ backgroundImage: `url(${element.writerIcon})` }}
      ></button>
      <div className={style.comment_content}>
        <p className={style.comment_writer}>{element.writer}</p>
        <p className={style.comment_text}>{element.content}</p>
        <div className={style.comment_like_container}>
          <>
            <button className={style.like}></button>
            <p>{element.like}</p>
          </>
          <button className={style.dislike}></button>
          <button className={style.recomment}>답글</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import avatar from "Shared/asset/avatar_black.svg";
const useCommentData = (count = 15) => {
  const [commentList, setCommentList] = React.useState([]);

  React.useEffect(() => {
    const tmpList = [];
    for (let index = 0; index < count; index++) {
      tmpList.push({
        index: index,
        writerIcon: avatar,
        writer: `작성자${index + 1}`,
        content: "안녕하세요 이것은 댓글의 내용입니다.".repeat(5 * (index + 1)),
        like: `${index}`,
      });
      setCommentList(tmpList);
    }
  }, [count]);

  return commentList;
};

export default useCommentData;

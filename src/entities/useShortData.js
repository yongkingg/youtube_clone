import React from "react";
const useShortData = () => {
  const [shortsData, setShortsData] = React.useState([]);

  React.useEffect(() => {
    const commentData = [];
    for (let index = 0; index < 5; index++) {
      commentData.push({
        writer: `작성자${index + 1}`,
        content: "안녕하세요 이것은 댓글의 내용입니다.".repeat(5 * (index + 1)),
        like: `${index}`,
      });
    }

    const tmpData = {
      title: "역대 푸스카스 상 골 모음",
      account: "경로이",
      like: "1.1만",
      disLike: "싫어요",
      commentCount: commentData.length,
      comment: commentData,
    };
    setShortsData(tmpData);
  }, []);

  return [shortsData];
};

export default useShortData;

// 그대로 api 쪽으로

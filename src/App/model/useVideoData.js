import React from "react";
const useVideoData = () => {
  const [videoList, setVideoList] = React.useState([]);

  React.useEffect(() => {
    const tmpList = [];
    for (let index = 0; index < 15; index++) {
      tmpList.push({
        index: index,
        title: `${index + 1}번째 제목`,
        name: `yongkingg${index + 1}`,
        info: `조회수 ${index + 1}만회 • ${index + 1}개월 전`,
        thumnail:
          "https://i.ytimg.com/vi/_c_ffkt9Lio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD86w_MxFncQ4SwjcRPpPLYy1Siwg",
        channelIcon:
          "https://yt3.ggpht.com/P5HXQNMuTDRWwudWf7SyRX47GmPQvgo3hfpEniFCAA6vhSFBjU8oEVqHStEErz2PjJXMhuK3nw=s88-c-k-c0x00ffffff-no-rj",
      });
      setVideoList(tmpList);
    }
  }, []);

  return [videoList];
};

export default useVideoData;

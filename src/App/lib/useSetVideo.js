import React from "react";
const useSetVideo = () => {
  const [video, setVideo] = React.useState();

  const setVideoData = (videoData) => {
    setVideo(videoData);
  };

  return [video, setVideoData];
};

export default useSetVideo;

// router dom에 param으로 영상 index만 넘겨서 적용해보자
// param과 query의 차이에 대해서도 알아보자

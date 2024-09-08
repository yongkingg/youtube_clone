import React from "react";
const useSetVideo = () => {
  const [video, setVideo] = React.useState();

  const setVideoData = (videoData) => {
    setVideo(videoData);
  };

  return [video, setVideoData];
};

export default useSetVideo;

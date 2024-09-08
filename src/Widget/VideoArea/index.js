import useVideoData from "./lib/useVideoData";
import style from "./style/videoArea.module.css";
import React from "react";
import Video from "./video";
const VideoArea = React.memo((props) => {
  const { setPage, setVideo } = props;
  const [videoData] = useVideoData();

  const videoClickEvent = (e) => {
    try {
      const videoId = e.target.closest(".video").dataset.videoId;
      setVideo(videoData[videoId]);
      setPage("video_detail");
    } catch (e) {
      console.error("Error in videoClickEvent:", e);
    }
  };

  return (
    <section className={style.video_area} onClick={videoClickEvent}>
      {videoData?.map((element, index) => (
        <Video key={index} element={element} />
      ))}
    </section>
  );
});

export default VideoArea;

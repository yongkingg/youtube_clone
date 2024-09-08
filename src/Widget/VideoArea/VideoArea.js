import useVideoData from "./lib/useVideoData";
import style from "./style/videoArea.module.css";
import React from "react";
import Video from "./video";
import { useNavigate } from "react-router-dom";

const VideoArea = React.memo((props) => {
  const { setVideo } = props;
  const [videoData] = useVideoData();
  const navigate = useNavigate();

  const videoClickEvent = (e) => {
    try {
      const videoId = e.target.closest(`[data-role="video"]`).dataset.videoId;
      setVideo(videoData[videoId]);
      navigate("/video_detail");
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

import style from "./main.module.css";

import useVideoData from "App/model/useVideoData";
import { useNavigate } from "react-router-dom";
import Video from "../video/video";

const Main = (props) => {
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
};

export default Main;

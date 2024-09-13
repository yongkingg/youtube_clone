import style from "./style/main.module.css";
import useVideoData from "../../api/useVideoData";
import { useNavigate } from "react-router-dom";
import Video from "../video";

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
    <div className={style.video_area}>
      <section className={style.video_area} onClick={videoClickEvent}>
        {videoData?.map((element, index) => (
          <Video key={index} element={element} />
        ))}
      </section>
    </div>
  );
};

export default Main;

import style from "./main.module.css";
import useVideoData from "Shared/api/useVideoData";
import Video from "../video/video";
import useVideoClick from "Shared/model/useVideoClick";

const Main = () => {
  const [videoData] = useVideoData();
  const handleVideoClick = useVideoClick();

  return (
    <section className={style.video_area} onClick={handleVideoClick}>
      {videoData?.map((element, index) => (
        <Video key={index} element={element} />
      ))}
    </section>
  );
};

export default Main;

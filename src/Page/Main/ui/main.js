import useVideoData from "../../../entities/useVideoData";
import Video from "../video/video";
import useVideoClick from "Page/VideoDetail/model/useVideoClick";
import Style from "./style";

const Main = () => {
  const [videoData] = useVideoData();

  const handleVideoClick = useVideoClick();
  return (
    <Style.Container onClick={handleVideoClick}>
      {videoData?.map((element, index) => (
        <Video key={index} element={element} />
      ))}
    </Style.Container>
  );
};

export default Main;

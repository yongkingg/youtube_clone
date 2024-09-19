import useVideoData from "Shared/api/useVideoData";
import Video from "../video/video";
import useVideoClick from "Shared/model/useVideoClick";
import Style from "./style";

const Main = (props) => {
  const { mode } = props;
  const [videoData] = useVideoData();

  const handleVideoClick = useVideoClick();
  return (
    <Style.Container $bgColor={mode.bgColor} onClick={handleVideoClick}>
      {videoData?.map((element, index) => (
        <Video key={index} element={element} mode={mode} />
      ))}
    </Style.Container>
  );
};

export default Main;

import useVideoData from "Shared/api/useVideoData";
import Video from "../video/video";
import useVideoClick from "Shared/model/useVideoClick";
import { VideoContainer } from "./style";

const Main = (props) => {
  const { mode, darkColor } = props;
  const [videoData] = useVideoData();

  const handleVideoClick = useVideoClick();
  return (
    <VideoContainer $bgColor={mode.bgColor} onClick={handleVideoClick}>
      {videoData?.map((element, index) => (
        <Video
          key={index}
          element={element}
          mode={mode}
          darkColor={darkColor}
        />
      ))}
    </VideoContainer>
  );
};

export default Main;

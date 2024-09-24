import { useParams } from "react-router-dom";
const useGetVideoId = () => {
  const param = useParams();
  const videoId = param.videoId.split("=")[1];
  return videoId;
};

export default useGetVideoId;

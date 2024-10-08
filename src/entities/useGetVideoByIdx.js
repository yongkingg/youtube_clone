import useVideoData from "entities/useVideoData";

const useGetVideoByIdx = (props) => {
  const index = parseInt(props, 10);
  const [videoList] = useVideoData();
  const video = videoList.find((video) => video.index === index);
  return video;
};

export default useGetVideoByIdx;

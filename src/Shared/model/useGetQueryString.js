import { useParams } from "react-router-dom";
const useGetQueryString = () => {
  const param = useParams();
  const videoId = param.videoId.split("=")[1];
  return videoId;
};

// 이 video도 변수 취급을 해서 받아올 것
// 사실 이렇게 썼었어야 shared에 들어갈 자격이 있다.

export default useGetQueryString;

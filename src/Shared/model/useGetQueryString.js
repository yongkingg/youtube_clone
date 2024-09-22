import { useLocation } from "react-router-dom";

const useGetQueryString = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const videoId = query.get("video");
  return videoId;
};

// 이 video도 변수 취급을 해서 받아올 것
// 사실 이렇게 썼었어야 shared에 들어갈 자격이 있다.

export default useGetQueryString;

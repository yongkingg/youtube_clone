import { useLocation } from "react-router-dom";

const useGetQueryString = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const videoId = query.get("video");
  return videoId;
};

export default useGetQueryString;

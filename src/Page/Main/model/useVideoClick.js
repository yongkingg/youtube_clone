import { useNavigate } from "react-router-dom";

const useVideoClick = () => {
  const navigate = useNavigate();
  const handleVideoClick = (e) => {
    try {
      const videoId = e.target.closest(`[data-role="video"]`).dataset.videoId;
      console.log(videoId);
      navigate(`/video_detail?video=${videoId}`);
    } catch (error) {
      console.error("Error in videoClickEvent:", error);
    }
  };

  return handleVideoClick;
};

export default useVideoClick;

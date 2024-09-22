import { useNavigate } from "react-router-dom";

const useVideoClick = () => {
  const navigate = useNavigate();
  const handleVideoClick = (e) => {
    try {
      const videoId = e.target.closest(`[data-role="video"]`).dataset.videoId;
      navigate(`/video_detail?video=${videoId}`);
    } catch (error) {
      console.error("Error in videoClickEvent:", error);
    }
  };

  return handleVideoClick;
};

export default useVideoClick;

// 이것도 navigate hook으로 뺴버릴 수 있음.

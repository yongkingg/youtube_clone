import useRelatedVideoData from "./lib/useRelatedVideoData";
import RelatedVideo from "./relatedVideo/RelatedVideo";
import style from "./style/videoPreview.module.css";

const VideoPreview = (props) => {
  const { setVideo } = props;
  const [relateVideoData] = useRelatedVideoData();

  const videoClickEvent = (e) => {
    const videoId = e.target.closest(`[data-role="related_video"]`).dataset
      .videoId;
    console.log(videoId);
    setVideo(relateVideoData[videoId]);
  };

  return (
    <section className={style.video_preview} onClick={videoClickEvent}>
      {relateVideoData?.map((element, index) => (
        <RelatedVideo key={index} element={element} />
      ))}
    </section>
  );
};

export default VideoPreview;

import style from "./videoDetail.module.css";
import sub_style from "./videoPreview.module.css";
import CommentArea from "../../../../Widget/CommentArea/ui/CommentArea";
import useRelatedVideoData from "App/model/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/RelatedVideo";

const VideoDetail = (props) => {
  const { video, setVideo } = props;
  const [relateVideoData] = useRelatedVideoData();

  const videoClickEvent = (e) => {
    const videoId = e.target.closest(`[data-role="related_video"]`).dataset
      .videoId;
    setVideo(relateVideoData[videoId]);
  };

  return (
    <div className={style.row_set}>
      <>
        <section className={style.video_detail}>
          <div className={style.video_play_section}>
            <img className={style.video_play_thum} src={video.thumnail}></img>
            <h1 className={style.video_detail_title}>{video.title}</h1>
            <div className={`${style.row_set} ${style.gap_12px}`}>
              <img className={style.video_icon} src={video.channelIcon}></img>
              <div className={style.video_detail_info}>
                <h3>{video.name}</h3>
                <h3>{video.info}</h3>
              </div>
            </div>
          </div>
          <CommentArea />
        </section>
      </>
      <section className={sub_style.video_preview} onClick={videoClickEvent}>
        {relateVideoData?.map((element, index) => (
          <RelatedVideo key={index} element={element} />
        ))}
      </section>
    </div>
  );
};

export default VideoDetail;

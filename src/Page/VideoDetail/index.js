import style from "./style/videoDetail.module.css";
import CommentArea from "../../Widget/CommentArea/CommentArea";
import VideoPreview from "../../Widget/VideoPreview/VideoPreview";

const VideoDetail = (props) => {
  const { video, setVideo } = props;
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
      <VideoPreview setVideo={setVideo} />
    </div>
  );
};

export default VideoDetail;

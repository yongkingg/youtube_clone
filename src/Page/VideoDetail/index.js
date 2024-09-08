import style from "./style/videoDetail.module.css";
import CommentArea from "../../Widget/CommentArea/CommentArea";

const VideoDetail = (props) => {
  const { page, setPage, video, setVideo } = props;
  console.log(page);
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
      {/* <VideoPreview setPage={setPage} setVideo={setVideo} /> */}
    </div>
  );
};

export default VideoDetail;

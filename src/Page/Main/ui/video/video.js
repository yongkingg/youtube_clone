import style from "./video.module.css";

const Video = (props) => {
  const { element } = props;
  return (
    <div
      className={style.video}
      data-video-id={element.index}
      data-role="video"
    >
      <img className={style.video_thumnail} src={element.thumnail}></img>
      <div className={style.tmp_box}>
        <img className={style.video_icon} src={element.channelIcon}></img>
        <div className={style.video_info_box}>
          <p className={style.video_title}>{element.title}</p>
          <p className={style.video_info}>{element.name}</p>
          <p className={style.video_info}>{element.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;

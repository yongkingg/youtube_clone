import style from "./style/relatedVideo.module.css";

const RelatedVideo = (props) => {
  const { element } = props;
  return (
    <div
      className={style.related_video}
      data-video-id={element.index}
      data-role="related_video"
    >
      <img className={style.related_video_thum} src={element.thumnail}></img>
      <div className={`${style.column_set} ${style.gap_4px}`}>
        <h1 className={style.related_video_title}>{element.title}</h1>
        <p className={style.related_video_info}>{element.name}</p>
        <p className={style.related_video_info}>{element.info}</p>
      </div>
    </div>
  );
};

export default RelatedVideo;

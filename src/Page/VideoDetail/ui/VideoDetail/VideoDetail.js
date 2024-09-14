import style from "./videoDetail.module.css";
import sub_style from "./videoPreview.module.css";
import useRelatedVideoData from "App/model/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/RelatedVideo";
import useCommentData from "../../model/useCommentData.js";
import HoverButton from "Shared/components/HoverButton";
import avatar from "Shared/asset/avatar.svg";
import Comment from "Widget/Comment";

const VideoDetail = (props) => {
  const { video, setVideo } = props;
  const [relateVideoData] = useRelatedVideoData();
  const commentList = useCommentData(5);

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
          <section className={style.container}>
            <>
              <h1 className={style.comment_count}>
                댓글 {commentList.length}개
              </h1>
              <div className={style.comment_input_box}>
                <HoverButton imageUrl={avatar} />
                <input></input>
                <div className={style.input_line}></div>
                <p className={style.placeholder}>댓글 추가</p>
              </div>
              <main className={style.comment_area}>
                {commentList.length > 0 ? (
                  commentList.map((element, index) => {
                    return <Comment key={index} element={element} />;
                  })
                ) : (
                  <p>로딩</p>
                )}
              </main>
            </>
          </section>
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

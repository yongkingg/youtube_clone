import style from "./videoDetail.module.css";
import sub_style from "./videoPreview.module.css";
import useRelatedVideoData from "Page/VideoDetail/RelatedVideo/api/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/ui/RelatedVideo";
import useCommentData from "../api/useCommentData";
import Comment from "Widget/Comment";
import CommentInput from "Widget/CommentInput";
import useGetQueryString from "Shared/model/useGetQueryString";
import useGetVideoByIdx from "Page/VideoDetail/api/useGetVideoByIdx";
import useVideoClick from "Shared/model/useVideoClick";

const VideoDetail = () => {
  const videoId = useGetQueryString();
  const video = useGetVideoByIdx(videoId);
  const commentList = useCommentData(5);
  const handleVideoClick = useVideoClick();
  const [relateVideoData] = useRelatedVideoData();

  return (
    <div className={style.row_set}>
      <>
        <section className={style.video_detail}>
          {video && (
            <div className={style.video_play_section}>
              <img
                className={style.video_play_thum}
                src={video.data.thumnail}
              ></img>
              <h1 className={style.video_detail_title}>{video.data.title}</h1>
              <div className={`${style.row_set} ${style.gap_12px}`}>
                <img
                  className={style.video_icon}
                  src={video.data.channelIcon}
                ></img>
                <div className={style.video_detail_info}>
                  <h3>{video.data.name}</h3>
                  <h3>{video.data.info}</h3>
                </div>
              </div>
            </div>
          )}
          <section className={style.container}>
            <>
              <h1 className={style.comment_count}>
                댓글 {commentList.length}개
              </h1>
              <CommentInput />
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
      <section className={sub_style.video_preview} onClick={handleVideoClick}>
        {relateVideoData?.map((element, index) => (
          <RelatedVideo key={index} element={element} />
        ))}
      </section>
    </div>
  );
};

export default VideoDetail;

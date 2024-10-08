import useRelatedVideoData from "entities/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/RelatedVideo";
import useCommentData from "../../../entities/useCommentData";
import Comment from "Widget/Comment";
import CommentInput from "Widget/CommentInput";
import useGetVideoByIdx from "entities/useGetVideoByIdx";
import useVideoClick from "Page/VideoDetail/model/useVideoClick";
import Style from "./style";
import useGetVideoId from "Page/VideoDetail/model/useGetVideoId";

const VideoDetail = () => {
  const videoId = useGetVideoId();
  console.log(videoId);
  const video = useGetVideoByIdx(videoId);
  const commentList = useCommentData(5);
  const handleVideoClick = useVideoClick();
  const [relateVideoData] = useRelatedVideoData();

  return (
    <Style.Container $type="row_set">
      <>
        <Style.Container $type="video_detail">
          {video && (
            <Style.Section $type="video">
              <Style.Image
                $type="thumnail"
                src={video.data.thumnail}
              ></Style.Image>
              <Style.Text $type="title">{video.data.title}</Style.Text>
              <Style.Container $type="row_set" $gap="12px">
                <Style.Image
                  $type="icon"
                  src={video.data.channelIcon}
                ></Style.Image>
                <Style.Container $type="video_detail">
                  <Style.Text $type="info">{video.data.name}</Style.Text>
                  <Style.Text $type="info">{video.data.info}</Style.Text>
                </Style.Container>
              </Style.Container>
            </Style.Section>
          )}
          <Style.Container $type="comment">
            <>
              <Style.Text $type="comment_count">
                댓글 {commentList.length}개
              </Style.Text>
              <CommentInput />
              <Style.Container $type="comment">
                {commentList.length > 0 ? (
                  commentList.map((element, index) => {
                    return <Comment key={index} element={element} />;
                  })
                ) : (
                  <p>로딩</p>
                )}
              </Style.Container>
            </>
          </Style.Container>
        </Style.Container>
      </>
      <Style.Section $type="preview" onClick={handleVideoClick}>
        {relateVideoData?.map((element, index) => (
          <RelatedVideo key={index} element={element} />
        ))}
      </Style.Section>
    </Style.Container>
  );
};

export default VideoDetail;

import useRelatedVideoData from "Page/VideoDetail/RelatedVideo/api/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/ui/RelatedVideo";
import useCommentData from "../api/useCommentData";
import Comment from "Widget/Comment";
import CommentInput from "Widget/CommentInput";
import useGetQueryString from "Shared/model/useGetQueryString";
import useGetVideoByIdx from "Page/VideoDetail/api/useGetVideoByIdx";
import useVideoClick from "Shared/model/useVideoClick";

import Style from "./style";

const VideoDetail = (props) => {
  const { mode, darkColor } = props;

  const videoId = useGetQueryString();
  const video = useGetVideoByIdx(videoId);
  const commentList = useCommentData(5);
  const handleVideoClick = useVideoClick();
  const [relateVideoData] = useRelatedVideoData();

  return (
    <Style.Container $type="row_set">
      <>
        <Style.Container $type="video_detail" $bgColor={mode.bgColor}>
          {video && (
            <Style.Section $type="video" $bgColor={mode.bgColor}>
              <Style.Image
                $type="thumnail"
                src={video.data.thumnail}
              ></Style.Image>
              <Style.Text $type="title" $fontColor={mode.fontColor}>
                {video.data.title}
              </Style.Text>
              <Style.Container $type="row_set" $gap="12px">
                <Style.Image
                  $type="icon"
                  src={video.data.channelIcon}
                ></Style.Image>
                <Style.Container $type="video_detail">
                  <Style.Text $type="info" $fontColor={mode.fontColor}>
                    {video.data.name}
                  </Style.Text>
                  <Style.Text $type="info" $fontColor={mode.fontColor}>
                    {video.data.info}
                  </Style.Text>
                </Style.Container>
              </Style.Container>
            </Style.Section>
          )}
          <Style.Container $type="comment" $bgColor={mode.bgColor}>
            <>
              <Style.Text $type="comment_count" $fontColor={mode.fontColor}>
                댓글 {commentList.length}개
              </Style.Text>
              <CommentInput mode={mode} darkColor={darkColor} />
              <Style.Container $type="comment" $bgColor={mode.bgColor}>
                {commentList.length > 0 ? (
                  commentList.map((element, index) => {
                    return (
                      <Comment
                        key={index}
                        element={element}
                        mode={mode}
                        darkColor={darkColor}
                      />
                    );
                  })
                ) : (
                  <p>로딩</p>
                )}
              </Style.Container>
            </>
          </Style.Container>
        </Style.Container>
      </>
      <Style.Section
        $type="preview"
        $bgColor={mode.bgColor}
        onClick={handleVideoClick}
      >
        {relateVideoData?.map((element, index) => (
          <RelatedVideo key={index} element={element} mode={mode} />
        ))}
      </Style.Section>
    </Style.Container>
  );
};

export default VideoDetail;

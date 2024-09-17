import sub_style from "./videoPreview.module.css";
import useRelatedVideoData from "Page/VideoDetail/RelatedVideo/api/useRelatedVideoData";
import RelatedVideo from "../RelatedVideo/ui/RelatedVideo";
import useCommentData from "../api/useCommentData";
import Comment from "Widget/Comment";
import CommentInput from "Widget/CommentInput";
import useGetQueryString from "Shared/model/useGetQueryString";
import useGetVideoByIdx from "Page/VideoDetail/api/useGetVideoByIdx";
import useVideoClick from "Shared/model/useVideoClick";

import {
  VideoDetailContainer,
  VideoPlaySection,
  VideoPlayThumnail,
  VideoDetailInfo,
  VideoIcon,
  VideoTitle,
  VideoInfoText,
  RowSet,
  CommentCount,
  CommentContainer,
  CommentArea,
} from "./style";

const VideoDetail = (props) => {
  const { mode, darkColor } = props;

  const videoId = useGetQueryString();
  const video = useGetVideoByIdx(videoId);
  const commentList = useCommentData(5);
  const handleVideoClick = useVideoClick();
  const [relateVideoData] = useRelatedVideoData();

  return (
    <RowSet>
      <>
        <VideoDetailContainer $bgColor={mode.bgColor}>
          {video && (
            <VideoPlaySection>
              <VideoPlayThumnail src={video.data.thumnail}></VideoPlayThumnail>
              <VideoTitle $fontColor={mode.fontColor}>
                {video.data.title}
              </VideoTitle>
              <RowSet $gap="12px">
                <VideoIcon src={video.data.channelIcon}></VideoIcon>
                <VideoDetailInfo>
                  <VideoInfoText $fontColor={mode.fontColor}>
                    {video.data.name}
                  </VideoInfoText>
                  <VideoInfoText $fontColor={mode.fontColor}>
                    {video.data.info}
                  </VideoInfoText>
                </VideoDetailInfo>
              </RowSet>
            </VideoPlaySection>
          )}
          <CommentContainer>
            <>
              <CommentCount $fontColor={mode.fontColor}>
                댓글 {commentList.length}개
              </CommentCount>
              <CommentInput mode={mode} darkColor={darkColor} />
              <CommentArea>
                {commentList.length > 0 ? (
                  commentList.map((element, index) => {
                    return (
                      <Comment key={index} element={element} mode={mode} />
                    );
                  })
                ) : (
                  <p>로딩</p>
                )}
              </CommentArea>
            </>
          </CommentContainer>
        </VideoDetailContainer>
      </>
      <section className={sub_style.video_preview} onClick={handleVideoClick}>
        {relateVideoData?.map((element, index) => (
          <RelatedVideo key={index} element={element} />
        ))}
      </section>
    </RowSet>
  );
};

export default VideoDetail;

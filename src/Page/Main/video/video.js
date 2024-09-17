import {
  VideoBox,
  Thumnail,
  VideoInfoBox,
  VideoTitle,
  VideoInfo,
  VideoIcon,
  TmpBox,
} from "./style";

const Video = (props) => {
  const { element, mode } = props;

  return (
    <VideoBox
      $bgColor={mode.bgColor}
      data-video-id={element.index}
      data-role="video"
    >
      <Thumnail src={element.data.thumnail}></Thumnail>
      <TmpBox>
        <VideoIcon src={element.data.channelIcon}></VideoIcon>
        <VideoInfoBox>
          <VideoTitle $fontColor={mode.fontColor}>
            {element.data.title}
          </VideoTitle>
          <VideoInfo $fontColor={mode.fontColor}>{element.data.name}</VideoInfo>
          <VideoInfo $fontColor={mode.fontColor}>{element.data.info}</VideoInfo>
        </VideoInfoBox>
      </TmpBox>
    </VideoBox>
  );
};

export default Video;

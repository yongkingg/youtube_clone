import Style from "./style";

const Video = (props) => {
  const { element } = props;

  return (
    <Style.Box $type="video" data-video-id={element.index} data-role="video">
      <Style.Image $type="thumnail" src={element.data.thumnail}></Style.Image>
      <Style.Box $type="tmp">
        <Style.Image $type="icon" src={element.data.channelIcon}></Style.Image>
        <Style.Box $type="video_info">
          <Style.Text $type="title">{element.data.title}</Style.Text>
          <Style.Text $type="info">{element.data.name}</Style.Text>
          <Style.Text $type="info">{element.data.info}</Style.Text>
        </Style.Box>
      </Style.Box>
    </Style.Box>
  );
};

export default Video;

// 파일명 : index

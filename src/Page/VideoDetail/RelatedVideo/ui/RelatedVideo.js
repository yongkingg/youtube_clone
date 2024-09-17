import { RelatedVideoContainer, ColumnSet } from "./style";

const RelatedVideo = (props) => {
  const { element, mode } = props;
  return (
    <RelatedVideoContainer data-video-id={element.index} data-role="video">
      <img src={element.thumnail}></img>
      <ColumnSet $fontColor={mode.fontColor}>
        <h1>{element.title}</h1>
        <p>{element.name}</p>
        <p>{element.info}</p>
      </ColumnSet>
    </RelatedVideoContainer>
  );
};

export default RelatedVideo;

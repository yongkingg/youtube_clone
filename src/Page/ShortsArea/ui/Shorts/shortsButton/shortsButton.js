import Style from "./style";

const ShortsButton = (props) => {
  const { id, image } = props;
  return <Style.Button $image={image} data-id={id}></Style.Button>;
};

export default ShortsButton;

import { ClosedAsideButtons, ButtonTxt, ButtonImg } from "./style";

const CloseAsideButton = (props) => {
  const { mode, buttons, index } = props;
  console.log(mode.fontColor);
  return (
    <ClosedAsideButtons data-button-id={index}>
      <ButtonImg
        style={{ backgroundImage: `url(${buttons.image})` }}
      ></ButtonImg>
      <ButtonTxt $color={mode.fontColor}>{buttons.name}</ButtonTxt>
    </ClosedAsideButtons>
  );
};

export default CloseAsideButton;

import { OpenedAsideButtons, ButtonTxt, ButtonImg } from "./style";

const OpenAsideButton = (props) => {
  const { mode, buttons, index } = props;
  return (
    <OpenedAsideButtons data-button-id={index}>
      <ButtonImg
        style={{ backgroundImage: `url(${buttons.image})` }}
      ></ButtonImg>
      <ButtonTxt $color={mode.fontColor}>{buttons.name}</ButtonTxt>
    </OpenedAsideButtons>
  );
};

export default OpenAsideButton;

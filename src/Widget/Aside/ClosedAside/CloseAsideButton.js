import style from "./style/closeAside.module.css";

const CloseAsideButton = (props) => {
  const { buttons, index } = props;
  return (
    <a className={style.closed_aside_button} data-button-id={index}>
      <div
        className={style.button_img}
        style={{ backgroundImage: `url(${buttons.image})` }}
      ></div>
      <p>{buttons.name}</p>
    </a>
  );
};

export default CloseAsideButton;

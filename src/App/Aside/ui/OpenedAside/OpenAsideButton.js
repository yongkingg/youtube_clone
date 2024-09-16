import style from "./openAside.module.css";

const OpenAsideButton = (props) => {
  const { buttons, index } = props;
  return (
    <a className={style.opened_aside_button} data-button-id={index}>
      <div
        className={style.button_img}
        style={{ backgroundImage: `url(${buttons.image})` }}
      ></div>
      <p>{buttons.name}</p>
    </a>
  );
};

export default OpenAsideButton;

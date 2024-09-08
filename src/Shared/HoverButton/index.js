import style from "./style/hoverButton.module.css";
const HoverButton = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <button
      className={style.tools_btn}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></button>
  );
};

export default HoverButton;

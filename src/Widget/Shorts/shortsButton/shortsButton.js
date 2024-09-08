import style from "../style/shorts.module.css";

const ShortsButton = (props) => {
  const { id, getClass } = props;
  return (
    <button
      className={`${style[getClass]} ${style.svg_back}`}
      data-id={id}
    ></button>
  );
};

export default ShortsButton;

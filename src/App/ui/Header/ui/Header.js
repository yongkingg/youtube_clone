import HoverButton from "../../../../Shared/components/HoverButton";
import style from "../style/header.module.css";
import video from "../asset/video.svg";
import avatar from "Shared/asset/avatar.svg";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { menuClick } = props;
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  const headerButtons = [
    {
      image: video,
    },
    {
      image: alert,
    },
    {
      image: avatar,
    },
  ];

  return (
    <header className={style.header}>
      <div className={style.sidebar_box}>
        <button className={style.menu} onClick={menuClick}></button>
        <button className={style.logo} onClick={returnHome}></button>
      </div>

      <div className={style.search_box}>
        <div className={style.search_field}>
          <input className={style.search_input} placeholder="검색"></input>
          <button className={style.search_btn}></button>
        </div>
        <button className={style.search_voice}></button>
      </div>

      <div className={style.tools_box}>
        {headerButtons.map((element, index) => (
          <HoverButton key={index} imageUrl={element.image} />
        ))}
      </div>
    </header>
  );
};

export default Header;

import style from "./style/main.module.css";
import VideoArea from "../../Widget/VideoArea";
const Main = () => {
  return (
    <div className={style.main_container}>
      <VideoArea />
    </div>
  );
};

export default Main;

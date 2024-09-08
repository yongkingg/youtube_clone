import style from "./style/main.module.css";
import VideoArea from "../../Widget/VideoArea/VideoArea";
const Main = (props) => {
  const { setVideo } = props;
  return (
    <div className={style.main_container}>
      <VideoArea setVideo={setVideo} />
    </div>
  );
};

export default Main;

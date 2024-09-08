import style from "./style/main.module.css";
import VideoArea from "../../Widget/VideoArea/VideoArea";
const Main = (props) => {
  const { setPage, setVideo } = props;
  return (
    <div className={style.main_container}>
      <VideoArea setPage={setPage} setVideo={setVideo} />
    </div>
  );
};

export default Main;

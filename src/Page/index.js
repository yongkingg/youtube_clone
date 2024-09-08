import Main from "./Main";
import VideoDetail from "./VideoDetail";
import useSetVideo from "./lib/useSetVideo";
import ShortsArea from "./ShortsArea";
const Page = (props) => {
  const { page, setPage } = props;
  const [video, setVideo] = useSetVideo();
  return (
    <>
      {page === "main" && <Main setPage={setPage} setVideo={setVideo} />}
      {page === "video_detail" && (
        <VideoDetail video={video} setVideo={setVideo} />
      )}
      {page === "shorts" && <ShortsArea />}
    </>
  );
};

export default Page;

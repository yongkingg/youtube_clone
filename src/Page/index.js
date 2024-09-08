import Main from "./Main";
import VideoDetail from "./VideoDetail";
import useSetVideo from "./lib/useSetVideo";
const Page = (props) => {
  const { page, setPage } = props;
  const [video, setVideo] = useSetVideo();

  return (
    <>
      {page === "main" && <Main setPage={setPage} setVideo={setVideo} />}
      {page === "video_detail" && (
        <VideoDetail
          page={page}
          setPage={setPage}
          video={video}
          setVideo={setVideo}
        />
      )}
    </>
  );
};

export default Page;

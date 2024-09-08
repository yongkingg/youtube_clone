import Main from "./Main";
import VideoDetail from "./VideoDetail";
const Page = (props) => {
  const { page, setPage } = props;
  return (
    <>
      {page === "main" && <Main />}
      {page === "video_detail" && <VideoDetail />}
    </>
  );
};

export default Page;

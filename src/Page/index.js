import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import VideoDetail from "./VideoDetail";
import ShortsArea from "./ShortsArea";

const Page = (props) => {
  const { video, setVideo } = props;
  return (
    <Routes>
      <Route path="/" element={<Main setVideo={setVideo} />} />
      <Route
        path="/video_detail"
        element={<VideoDetail video={video} setVideo={setVideo} />}
      />
      <Route path="/shorts" element={<ShortsArea />} />
    </Routes>
  );
};

export default Page;

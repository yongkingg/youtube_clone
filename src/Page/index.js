import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import VideoDetail from "./VideoDetail";
import ShortsArea from "./ShortsArea";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/video_detail/:videoId" element={<VideoDetail />} />
      <Route path="/shorts" element={<ShortsArea />} />
    </Routes>
  );
};

export default Page;

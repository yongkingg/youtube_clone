import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import VideoDetail from "./VideoDetail";
import ShortsArea from "./ShortsArea";

const Page = (props) => {
  const { mode, darkColor } = props;
  return (
    <Routes>
      <Route path="/" element={<Main mode={mode} />} />
      <Route
        path="/video_detail"
        element={<VideoDetail mode={mode} darkColor={darkColor} />}
      />
      <Route path="/shorts" element={<ShortsArea />} />
    </Routes>
  );
};

export default Page;

import React from "react";

const usePage = () => {
  const [page, setPage] = React.useState("main");

  const setCurrentPage = (pageName) => {
    setPage(pageName);
  };

  console.log(page);
  return [page, setCurrentPage];
};

export default usePage;

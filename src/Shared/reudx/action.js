export const changePage = (pageName) => {
  return {
    type: "CHANGE_PAGE",
    page_name: pageName,
  };
};

export const changeAside = (isOpen) => {
  return {
    type: "CHANGE_ASIDE",
    aside_type: isOpen,
  };
};

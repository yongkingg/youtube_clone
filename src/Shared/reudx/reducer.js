import { createStore } from "redux";

const defaultState = {
  page: "/",
  aside: false,
};

const reducer = (store = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...store,
        page: action.page_name,
      };
    case "CHANGE_ASIDE":
      return {
        ...store,
        aside: action.aside_type,
      };
    default:
      return store;
  }
};

const store = createStore(reducer);
export default store;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "Shared/reudx/action";
const useAsideClickEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickEvent = (e) => {
    try {
      let path = e.target.closest("a").dataset.buttonPath;
      dispatch(changePage(path));
      navigate(path);
    } catch (e) {
      console.log(e);
    }
  };

  return clickEvent;
};

export default useAsideClickEvent;

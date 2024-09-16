import { useNavigate } from "react-router-dom";
const useAsideClickEvent = () => {
  const navigate = useNavigate();

  const clickEvent = (e) => {
    try {
      let clickedBtn = parseInt(e.target.closest("a").dataset.buttonId, 10);
      switch (clickedBtn) {
        case 0:
          navigate("/");
          break;
        case 1:
          navigate("/shorts");
          break;
        case 3:
          console.log("구독");
          break;
        case 4:
          console.log("나");
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return clickEvent;
};

export default useAsideClickEvent;

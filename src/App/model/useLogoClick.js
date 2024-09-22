import { useNavigate } from "react-router-dom";

export const useLogoClick = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };
  return returnHome;
};

// 팁
// 이거를 shared에 넣고, 변수를 받아서 navigate를 적용하자

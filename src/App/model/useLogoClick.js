import { useNavigate } from "react-router-dom";

export const useLogoClick = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };
  return returnHome;
};

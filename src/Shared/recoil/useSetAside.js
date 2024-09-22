import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

const initAside = atom({ key: "ASIDE", default: false });

const useSetAside = () => {
  const isOpen = useRecoilValue(initAside);
  const setAside = useSetRecoilState(initAside);

  const setAsideEvent = () => {
    setAside((prev) => !prev);
  };

  return [isOpen, setAsideEvent];
};

export default useSetAside;

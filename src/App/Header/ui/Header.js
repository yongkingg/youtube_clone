import { useLogoClick } from "../../model/useLogoClick";

import Style from "./style";
import { Menu } from "../asset/menu";
import { Alert } from "../asset/alert";
import { Search } from "../asset/search";
import { Video } from "../asset/video";
import { Youtube } from "../asset/youtube";
import { Avatar } from "Shared/asset/avatar";
import { Voice } from "../asset/voice";
import useSetAside from "Shared/recoil/useSetAside";

const Header = (props) => {
  const { switchTheme } = props;
  const [, setAsideEvent] = useSetAside();

  const returnHome = useLogoClick();

  return (
    <Style.Container $type="header">
      <Style.Container $type="side_box">
        <Style.Button $type="menu" onClick={setAsideEvent}>
          <Menu />
        </Style.Button>

        <Style.Button $type="logo" onClick={returnHome}>
          <Youtube />
        </Style.Button>
      </Style.Container>

      <Style.Container $type="search_box">
        <Style.Search>
          <input placeholder="검색"></input>
          <Style.Button $type="search">
            <Search />
          </Style.Button>
        </Style.Search>

        <Style.Button $type="voice" onClick={switchTheme}>
          <Voice />
        </Style.Button>
      </Style.Container>

      <Style.Container $type="tool_box">
        <Style.Button $type="hover">
          <Video />
        </Style.Button>
        <Style.Button $type="hover">
          <Alert />
        </Style.Button>
        <Style.Button $type="hover">
          <Avatar />
        </Style.Button>
      </Style.Container>
    </Style.Container>
  );
};

export default Header;

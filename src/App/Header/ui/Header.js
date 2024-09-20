import { useLogoClick } from "../../model/useLogoClick";

import video_black from "../asset/video_black.svg";
import video_white from "../asset/video_white.svg";

import alert_black from "../asset/alert_black.svg";
import alert_white from "../asset/alert_white.svg";

import avatar_black from "Shared/asset/avatar_black.svg";
import avatar_white from "Shared/asset/avatar_white.svg";

import menu_white from "../asset/menu_white.svg";
import menu_black from "../asset/menu_black.svg";

import logo_black from "../asset/youtube.svg";
import logo_white from "../asset/youtube_white.svg";

import Style from "./style";

const Header = (props) => {
  const { mode, menuClick, switchTheme, darkColor } = props;

  const returnHome = useLogoClick();

  const headerButtons = [
    {
      black: video_black,
      white: video_white,
    },
    {
      black: alert_black,
      white: alert_white,
    },
    {
      black: avatar_black,
      white: avatar_white,
    },
  ];

  return (
    <Style.Container $type="header">
      <Style.Container $type="side_box">
        <Style.Button
          $type="menu"
          $image={mode.bgColor == darkColor ? menu_white : menu_black}
          onClick={menuClick}
        ></Style.Button>

        <Style.Button
          $type="logo"
          $image={mode.bgColor == darkColor ? logo_white : logo_black}
          onClick={returnHome}
        ></Style.Button>
      </Style.Container>

      <Style.Container $type="search_box">
        <Style.Search>
          <input placeholder="검색"></input>
          <Style.Button $type="search"></Style.Button>
        </Style.Search>

        <Style.Button $type="voice" onClick={switchTheme}></Style.Button>
      </Style.Container>

      <Style.Container $type="tool_box">
        {headerButtons.map((element, index) => (
          <Style.Button
            $type="hover"
            key={index}
            $image={mode.bgColor == darkColor ? element.white : element.black}
          />
        ))}
      </Style.Container>
    </Style.Container>
  );
};

export default Header;

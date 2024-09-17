import HoverButton from "Shared/components/HoverButton";
import ContainerStyle from "./style/ContainerStyle";
import { SearchField, SearchInput } from "./style/SeacrhStyle";
import ButtonStyle from "./style/ButtonStyle";
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
    <ContainerStyle.Container $type="header">
      <ContainerStyle.Container $type="side_box">
        <ButtonStyle.Button
          $type="menu"
          $image={mode.bgColor == darkColor ? menu_white : menu_black}
          onClick={menuClick}
        ></ButtonStyle.Button>

        <ButtonStyle.Button
          $type="logo"
          $image={mode.bgColor == darkColor ? logo_white : logo_black}
          onClick={returnHome}
        ></ButtonStyle.Button>
      </ContainerStyle.Container>

      <ContainerStyle.Container $type="search_box">
        <SearchField>
          <SearchInput placeholder="검색"></SearchInput>
          <ButtonStyle.Button $type="search"></ButtonStyle.Button>
        </SearchField>

        <ButtonStyle.Button
          $type="voice"
          onClick={switchTheme}
        ></ButtonStyle.Button>
      </ContainerStyle.Container>

      <ContainerStyle.Container $type="tool_box">
        {headerButtons.map((element, index) => (
          <HoverButton
            key={index}
            imageUrl={mode.bgColor == darkColor ? element.white : element.black}
          />
        ))}
      </ContainerStyle.Container>
    </ContainerStyle.Container>
  );
};

export default Header;

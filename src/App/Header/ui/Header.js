import HoverButton from "Shared/components/HoverButton";
import video from "../asset/video.svg";
import alert from "../asset/alert.svg";
import avatar from "Shared/asset/avatar.svg";
import ContainerStyle from "./ContainerStyle";
import { SearchField, SearchInput } from "./SeacrhStyle";
import ButtonStyle from "./ButtonStyle";
import { useLogoClick } from "../../model/useLogoClick";

const Header = (props) => {
  const { menuClick } = props;
  const returnHome = useLogoClick();

  const headerButtons = [
    {
      image: video,
    },
    {
      image: alert,
    },
    {
      image: avatar,
    },
  ];

  return (
    <ContainerStyle.Container $type="header">
      <ContainerStyle.Container $type="side_box">
        <ButtonStyle.Button
          $type="menu"
          onClick={menuClick}
        ></ButtonStyle.Button>
        <ButtonStyle.Button
          $type="logo"
          onClick={returnHome}
        ></ButtonStyle.Button>
      </ContainerStyle.Container>

      <ContainerStyle.Container $type="search_box">
        <SearchField>
          <SearchInput placeholder="검색"></SearchInput>
          <ButtonStyle.Button $type="search"></ButtonStyle.Button>
        </SearchField>
        <ButtonStyle.Button $type="voice"></ButtonStyle.Button>
      </ContainerStyle.Container>

      <ContainerStyle.Container $type="tool_box">
        {headerButtons.map((element, index) => (
          <HoverButton key={index} imageUrl={element.image} />
        ))}
      </ContainerStyle.Container>
    </ContainerStyle.Container>
  );
};

export default Header;

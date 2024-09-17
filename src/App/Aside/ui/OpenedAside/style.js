import styled from "styled-components";

export const OpenedAside = styled.div`
  width: 240px;
  height: calc(100vh - 59px);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px 12px;
  position: sticky;
  top: 59px;
  left: 0;
  background-color: ${(props) => props.mode};
`;

export const OpenedAsideButtons = styled.a`
  width: 204px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
`;

export const ButtonTxt = styled.p`
  color: ${(props) => props.$color};
  font-size: 10px;
  margin-left: 10px;
`;

export const ButtonImg = styled.image`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: start;
  background-repeat: no-repeat;
`;

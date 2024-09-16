import styled from "styled-components";

export const ClosedAside = styled.div`
  width: 72px;
  height: calc(100vh - 59px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4px;
  position: sticky;
  top: 59px;
  left: 0;
`;

export const ClosedAsideButtons = styled.a`
  width: 64px;
  height: 74px;
  padding: 16px 0 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f2f2f2;
    border-radius: 0cap;
  }
`;

export const ButtonTxt = styled.p`
  font-size: 10px;
`;

export const ButtonImg = styled.image`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: start;
  background-repeat: no-repeat;
`;

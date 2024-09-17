import styled from "styled-components";

export const VideoBox = styled.div`
  flex: 1 0 310px;
  height: 330px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${(props) => props.$bgColor};
`;

export const Thumnail = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 12px;
`;

export const VideoInfoBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const VideoTitle = styled.p`
  font-family: var(--main-font);
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.$fontColor};
`;

export const VideoInfo = styled.p`
  font-family: var(--main-font);
  color: ${(props) => props.$fontColor};
  font-size: 14px;
`;

export const VideoIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const TmpBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  gap: 8px;
`;

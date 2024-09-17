import styled from "styled-components";

export const VideoDetailContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  gap: 8px;
  background-color: ${(props) => props.$bgColor};
`;

export const VideoPlaySection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoPlayThumnail = styled.img`
  border-radius: 16px;
  aspect-ratio: 16 / 9;
  width: 100%;
  min-width: 600px;
`;

export const VideoDetailInfo = styled.div`
  font-family: var(--main-font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-size: 16px;
`;

export const VideoInfoText = styled.h3`
  color: ${(props) => props.$fontColor};
`;

export const VideoIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const VideoTitle = styled.h1`
  font-family: var(--main-font);
  color: ${(props) => props.$fontColor};
  font-size: 24px;
  font-weight: 900;
  padding: 12px 0;
`;

export const RowSet = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap || "0px"};
`;

export const CommentContainer = styled.section`
  margin: 24px 0px 32px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const CommentCount = styled.h1`
  color: ${(props) => props.$fontColor};
  font-family: var(--main-font);
  font-size: 20px;
  font-weight: 900;
`;

export const CommentArea = styled.main`
  margin-top: 32px;
`;

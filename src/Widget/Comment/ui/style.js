import styled from "styled-components";
export const CommentBox = styled.div`
  max-width: 100%;
  margin-bottom: 16px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: ${(props) => props.$bgColor};
`;

export const CommentContent = styled.div`
  flex-grow: 1;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentWriter = styled.p`
  font-size: 16px;
  color: ${(props) => props.$fontColor};
  font-family: var(--main-font);
  font-weight: 600;
  padding: 0 0 2px;
  margin: 0 4px 0 0;
`;

export const CommentText = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  max-width: calc(100%-40px);
  white-space: collapse;
  color: ${(props) => props.$fontColor};
  font-family: var(--main-font);
  font-size: 15px;
`;

export const CommentLikeContainer = styled.div`
  margin: 4px 0 0 -4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FeedBackBtn = styled.button`
  margin-left: 8px;
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.$btnImg});
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
`;

export const LikeCount = styled.p`
  color: ${(props) => props.$fontColor};
`;

export const ReComment = styled.button`
  width: 40px;
  height: 32px;
  margin-left: 12px;
  color: ${(props) => props.$fontColor};
  &:hover {
    background-color: lightgrey;
    border-radius: 16px;
  }
`;

export const CommentAvatar = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-size: 32px;
  background-position: center;
  background-repeat: no-repeat;
`;

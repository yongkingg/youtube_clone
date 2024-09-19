import styled, { css } from "styled-components";
export const ShortsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 450px;
  height: calc(100vh - 91px);
  border: none;
  aspect-ratio: 9/16;
  position: relative;
`;

export const CommentToolContainer = styled.div`
  background-color: ${(props) => props.$bgColor};
  border-radius: 24px;
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  h1 {
    color: ${(props) => props.$fontColor};
    font-family: var(--main-font);
    font-size: 20px;
    font-weight: 900;
  }

  h3 {
    color: ${(props) => props.$fontColor};
    font-family: var(--main-font);
    font-size: 16px;
    margin-left: 16px;
  }
`;

export const ToolBtn = styled.button`
  width: 40px;
  height: 40px;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => {
    switch (props.$type) {
      case "menu":
        return css`
          margin-left: auto;
          background-image: url(${props.$image});
        `;
      case "exit":
        return css`
          background-image: url(${props.$image});
        `;
    }
  }}
`;

export const CommentList = styled.div`
  background-color: ${(props) => props.$bgColor};
  padding: 4px 16px;
  height: calc(100% - 121px);
  overflow-y: auto;
`;

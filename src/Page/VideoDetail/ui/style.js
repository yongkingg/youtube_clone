import styled, { css } from "styled-components";

export default {
  Section: styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.$bgColor};
    ${(props) => {
      switch (props.$type) {
        case "video":
          return css`
            flex-grow: 1;
            padding: 24px;
            gap: 8px;
          `;
        case "comment":
          return css`
            margin: 24px 0 32px;
            width: 100%;
            height: fit-content;
          `;
        case "preview":
          return css`
            min-width: 426px;
            padding-top: 12px;
          `;
      }
    }}
  `,
  Container: styled.div`
    display: flex;
    background-color: ${(props) => props.$bgColor};
    ${(props) => {
      switch (props.$type) {
        case "video_detail":
          return css`
            flex-direction: column;
            justify-content: center;
            font-size: 16px;
            height: fit-content;
            font-family: var(--main-font);
          `;
        case "row_set":
          return css`
            flex-direction: row;
            gap: ${(props) => props.$gap || "0px"};
          `;
        case "comment":
          return css`
            flex-direction: column;
            margin-top: 32px;
          `;
      }
    }}
  `,
  Text: styled.p`
    font-family: var(--main-font);
    color: ${(props) => props.$fontColor};
    ${(props) => {
      switch (props.$type) {
        case "info":
          return css`
            font-size: 16px;
          `;
        case "title":
          return css`
            font-size: 24px;
            font-weight: 900;
            padding: 12px 0;
          `;
        case "comment_count":
          return css`
            font-size: 20px;
            font-weight: 900;
            padding-left: 16px;
          `;
      }
    }}
  `,
  Image: styled.img`
    ${(props) => {
      switch (props.$type) {
        case "thumnail":
          return css`
            border-radius: 16px;
            aspect-ratio: 16/9;
            width: 100%;
            min-width: 600px;
          `;
        case "icon":
          return css`
            width: 36px;
            height: 36px;
            border-radius: 50%;
          `;
      }
    }}
  `,
};

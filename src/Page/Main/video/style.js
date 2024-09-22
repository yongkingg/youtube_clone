import styled, { css } from "styled-components";

export default {
  Box: styled.div`
    cursor: pointer;
    display: flex;
    ${(props) => {
      switch (props.$type) {
        case "video":
          return css`
            flex-direction: column;
            flex: 1 0 310px;
            height: 330px;
            background-color: ${(props) => props.theme.bgColor};
          `;
        case "video_info":
          return css`
            flex-direction: column;
            width: 100%;
            height: 100px;
            gap: 4px;
          `;
        case "tmp":
          return css`
            flex-direction: row;
            padding-top: 10px;
            gap: 8px;
          `;
      }
    }}
  `,
  Image: styled.img`
    ${(props) => {
      switch (props.$type) {
        case "thumnail":
          return css`
            width: 100%;
            height: 210px;
            border-radius: 12px;
            background-size: contain;
          `;
        case "icon":
          return css`
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-image: url(${props.$src});
          `;
      }
    }}
  `,
  Text: styled.p`
    font-family: var(--main-font);
    color: ${(props) => props.theme.fontColor};
    ${(props) => {
      switch (props.$type) {
        case "title":
          return css`
            font-size: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
          `;
        case "info":
          return css`
            font-size: 14px;
          `;
      }
    }}
  `,
};

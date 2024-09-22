import styled, { css } from "styled-components";

export default {
  Container: styled.div`
    ${(props) => {
      switch (props.$type) {
        case "comment":
          return css`
            max-width: 100%;
            margin-bottom: 16px;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: start;
            background-color: ${(props) => props.theme.bgColor};
          `;
        case "feedback":
          return css`
            margin: 4px 0 0 -4px;
            display: flex;
            flex-direction: row;
            align-items: center;
          `;
      }
    }}
  `,

  Comment: styled.div`
    flex-grow: 1;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  Text: styled.p`
    color: ${(props) => props.theme.fontColor};
    font-family: var(--main-font);
    ${(props) => {
      switch (props.$type) {
        case "comment_writer":
          return css`
            font-size: 16px;
            font-weight: 600;
            padding: 0 0 2px;
            margin: 0 4px 0 0;
          `;
        case "comment_text":
          return css`
            word-wrap: break-word;
            word-break: break-all;
            white-space: normal;
            max-width: calc(100%-40px);
            white-space: collapse;
            font-size: 15px;
          `;
      }
    }}
  `,

  Button: styled.button`
    cursor: pointer;
    ${(props) => {
      switch (props.$type) {
        case "feedback":
          return css`
            margin-left: 8px;
            width: 32px;
            height: 32px;
            background-image: url(${(props) => props.$btnImg});
            background-size: 24px;
            background-repeat: no-repeat;
            background-position: center;

            &:hover {
              background-color: lightgrey;
              border-radius: 50%;
            }
          `;
        case "re_comment":
          return css`
            width: 40px;
            height: 32px;
            margin-left: 12px;
            color: ${(props) => props.theme.fontColor};
            &:hover {
              background-color: lightgrey;
              border-radius: 16px;
            }
          `;
        case "avatar":
          return css`
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            background-size: 32px;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(${(props) => props.$image});
          `;
      }
    }}
  `,
};

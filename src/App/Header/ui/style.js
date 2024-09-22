import styled, { css } from "styled-components";
import search from "../asset/search_black.svg";
import voice from "../asset/voice_black.svg";

// theme은 설정값을 정해놓고, props로 내려주지 않아도 사용할 수 있게 하기 위해
// 사용한다.

export default {
  Container: styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: 59px;
    ${(props) => {
      switch (props.$type) {
        case "header":
          return css`
            padding: 8px 16px 0;
            width: 100%;
            justify-content: space-between;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
          `;
        case "side_box":
          return css`
            flex: 0 1 170px;
            justify-content: start;
          `;
        case "search_box":
          return css`
            flex: 0 1 720px;
            margin: 0 20px;
          `;
        case "tool_box":
          return css`
          flex : 0 1 150px
          justify-self: space-between;
          `;
      }
    }}
  `,
  Button: styled.button`
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    height: inherit;
    ${(props) => {
      switch (props.$type) {
        case "menu":
          return css`
            min-width: 40px;
            padding: 8px;
            background-image: url(${props.$image});
            background-size: 24px;
            &:hover {
              width: 40px;
              height: 40px;
              background-color: #f2f2f2;
              border-radius: 50%;
            }
          `;
        case "logo":
          return css`
            min-width: 110px;
            background-image: url(${props.$image});
            background-size: contain;
          `;
        case "search":
          return css`
            min-width: 60px;
            height: 40px;
            border-radius: 0 20px 20px 0;
            background-image: url(${search});
            background-color: #f2f2f2;
            border: 1px solid lightgrey;
            background-size: 32px;
            &:hover {
              background-color: #f0f0f0;
              box-shadow: 0.5px 0.5px 0.5px lightgrey;
            }
          `;
        case "voice":
          return css`
            min-width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f2f2f2;
            border: 1px solid lightgrey;
            background-image: url(${voice});
            background-size: 32px;
            &:hover {
              background-color: lightgrey;
            }
          `;
        case "hover":
          return css`
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(${(props) => props.$image});
            background-size: 32px; /* 이미지 크기 조정 */
            &:hover {
              background-color: lightgrey;
              border-radius: 50%;
            }
          `;
      }
    }}
  `,

  Search: styled.div`
    flex: 0 1 660px;
    display: flex;
    flex-direction: row;
    justify-content: end;

    input {
      flex: 0 1 600px;
      height: 40px;
      border-radius: 20px 0 0 20px;
      padding: 0 16px;
      line-height: 40px;
      border: 1px solid lightgrey;
      color: grey;
    }
  `,
};

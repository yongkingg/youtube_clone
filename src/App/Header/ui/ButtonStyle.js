import styled, { css } from "styled-components";
import menu from "../asset/menu.svg";
import logo from "../asset/youtube.svg";
import search from "../asset/search.svg";
import voice from "../asset/voice.svg";
export default {
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
            background-image: url(${menu});
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
            background-image: url(${logo});
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
      }
    }}
  `,
};

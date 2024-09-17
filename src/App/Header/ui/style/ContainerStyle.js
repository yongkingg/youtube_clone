import styled, { css } from "styled-components";

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
};

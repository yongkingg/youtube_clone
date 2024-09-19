import styled, { css } from "styled-components";

export default {
  Aside: styled.div`
    height: calc(100vh - 59px);
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 59px;
    left: 0;
    background-color: ${(props) => props.$bgColor};
    ${(props) => {
      switch (props.$type) {
        case "open":
          return css`
            width: 240px;
            align-items: start;
            padding: 16px 12px;
          `;
        case "close":
          return css`
            width: 72px;
            align-items: center;
            padding: 0 4px;
          `;
      }
    }}
  `,

  Buttons: styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    ${(props) => {
      switch (props.$type) {
        case "open":
          return css`
            width: 204px;
            height: 40px;
            flex-direction: row;
            padding: 0 12px;

            p {
              margin-left: 10px;
            }
          `;
        case "close":
          return css`
            width: 64px;
            height: 74px;
            padding: 16px 0 14px;
            flex-direction: column;
            justify-content: center;

            p {
              margin-top: 4px;
            }
          `;
      }
    }}

    p {
      color: ${(props) => props.$color};
      font-size: 10px;
    }

    image {
      width: 24px;
      height: 24px;
      background-size: contain;
      background-position: start;
      background-repeat: no-repeat;
    }
  `,
};

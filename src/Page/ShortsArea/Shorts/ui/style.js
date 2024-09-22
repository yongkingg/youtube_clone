import styled, { keyframes, css } from "styled-components";
import shorts_test_img from "../asset/shorts_test_img.jpg";

const animation = {
  comment: {
    left: keyframes`
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(0);
    }
    `,
    right: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(50%);
    }
    `,
  },
  shorts: {
    left: keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }`,

    right: keyframes`
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  `,
  },
};

export default {
  Container: styled.div`
    ${(props) => {
      switch (props.$type) {
        case "shorts":
          return css`
            display: flex;
            flex-direction: row;
            min-width: 450px;
            position: absolute;
            height: calc(100vh - 91px);
            border: none;
            aspect-ratio: 9/16;
            position: relative;
          `;

        case "button":
          return css`
            margin: 16px;
            display: flex;
            position: absolute;
            flex-direction: row;
            gap: 16px;
          `;

        case "info":
          return css`
            position: absolute;
            width: calc(100% - 32px);
            bottom: 42px;
            left: 16px;

            p {
              padding: 4px 0;
              margin-top: 4px;
              font-size: 14px;
              font-weight: 500;
              color: white;
            }
          `;

        case "interaction":
          return css`
            cursor: pointer;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: end;
            gap: 16px;
            margin-left: 8px;
            ${(props) => {
              switch (props?.$animation) {
                case true:
                  return css`
                    right: -56px;
                    bottom: 0;
                  `;
                case false:
                  return css`
                    bottom: 0;
                    right: 8px;
                  `;
              }
            }}

            p {
              font-size: 14px;
              margin-top: 4px;
              font-family: var(--main-font);
              text-align: center;
            }
          `;

        case "comment":
          return css`
            position: absolute;
            top: 0;
            left: 0;
            max-width: 450px;
            min-width: 450px;
            height: 100%;
            border-radius: 24px;
            box-shadow: 1px 1px 8px lightgrey;
            ${(props) => {
              switch (props?.$animation) {
                case true:
                  return css`
                    animation: ${animation.comment.right} 0.5s ease forwards;
                  `;
                case false:
                  return css`
                    animation: ${animation.comment.left} 0.5s ease forwards;
                  `;
              }
            }}
          `;

        case "comment_tool":
          return css`
            background-color: ${(props) => props.theme.bgColor};
            border-radius: 24px;
            padding: 4px 16px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;

            h1 {
              color: ${(props) => props.theme.fontColor};
              font-family: var(--main-font);
              font-size: 20px;
              font-weight: 900;
            }

            h3 {
              color: ${(props) => props.theme.fontColor};
              font-family: var(--main-font);
              font-size: 16px;
              margin-left: 16px;
            }
          `;

        case "comment_list":
          return css`
            background-color: ${(props) => props.theme.bgColor};
            padding: 4px 16px;
            height: calc(100% - 121px);
            overflow-y: auto;
          `;

        case "shorts_owner_box":
          return css`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;

            img {
              width: 36px;
              height: 36px;
              border: none;
              border-radius: 50%;
              background-image: url("https://yt3.ggpht.com/P5HXQNMuTDRWwudWf7SyRX47GmPQvgo3hfpEniFCAA6vhSFBjU8oEVqHStEErz2PjJXMhuK3nw=s88-c-k-c0x00ffffff-no-rj");
              background-size: contain;
            }

            h1 {
              color: white;
              font-size: 18px;
              font-weight: 600;
            }

            button {
              width: 48px;
              height: 32px;
              background-color: black;
              border-radius: 16px;
              color: white;
              font-family: var(--main-font);
              font-size: 12px;
            }
          `;
      }
    }}
  `,

  ToolBtn: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    background-color: ${(props) => props.theme.bgColor};
    border-radius: 50%;
    background-size: 24px !important;
    background-position: center;
    background-repeat: no-repeat;
    ${(props) => {
      switch (props.$type) {
        case "menu":
          return css`
            margin-left: auto;
            background-image: url(${props.$image});
          `;
      }
    }};
  `,

  Main: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 24px;

    ${(props) => {
      switch (props.$type) {
        case "shorts":
          return css`
            width: 100%;
            background-image: url(${shorts_test_img});
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 1;
            ${(props) => {
              switch (props?.$animation) {
                case true:
                  return css`
                    border-radius: 24px 0 0 24px;
                    animation: ${animation.shorts.left} 0.5s ease forwards;
                  `;
                case false:
                  return css`
                    border-radius: 24px;
                    animation: ${animation.shorts.right} 0.5s ease forwards;
                  `;
              }
            }}
          `;
        case "comment":
          return css`
            max-width: 450px;
            min-width: 450px;
            box-shadow: 1px 1px 8px lightgrey;
            ${(props) => {
              switch (props?.$animation) {
                case true:
                  return css`
                    animation: ${animation.comment.right} 0.5s ease forwards;
                  `;
                case false:
                  return css`
                    animation: ${animation.comment.left} 0.5s ease forwards;
                  `;
              }
            }}
          `;
      }
    }}
  `,
};

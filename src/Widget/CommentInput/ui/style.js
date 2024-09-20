import styled, { keyframes, css } from "styled-components";

const border_change = keyframes`
    from {
        border-color: lightgrey;
    } to {
        border-color: grey;
    }
`;

export default {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 16px;
    border-radius: 24px;
    background-color: ${(props) => props.$bgColor};

    input {
      background-color: ${(props) => props.$bgColor};
      margin-left: 16px;
      border: none;
      border-bottom: 1px solid lightgray;
      width: calc(100% - 16px);
    }

    input::placeholder {
      color: grey;
    }

    input:focus {
      animation-name: ${border_change};
      animation-duration: 0.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  `,

  Button: styled.button`
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    height: inherit;
    ${(props) => {
      switch (props.$type) {
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
};

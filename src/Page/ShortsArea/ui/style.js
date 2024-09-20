import styled, { keyframes, css } from "styled-components";

export const ShortsSection = styled.section``;

const animation = {
  up: keyframes`
  from {
    top: calc(50% - 56px);
    right: 0;
  }
  to {
    top: calc(50% - 91px);
    right: 0;
  }
  `,
  down: keyframes`
     from {
    top: calc(50% - 56px);
    right: 0;
  }
  to {
    top: calc(50% - 21px);
    right: 0;
  }
  `,
};

export default {
  Container: styled.section`
    background-color: ${(props) => props.$bgColor};
    flex-grow: 1;
    position: relative;
    padding: 16px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: calc(100% - 67px);
  `,

  Button: styled.button`
    cursor: pointer;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    width: 56px;
    height: 56px;
    margin: 8px 24px;
    border-radius: 50%;
    background-color: black;
    background-size: 24px !important;
    background-image: url(${(props) => props.$image});
    top: calc(50% - 56px);
    right: 0;
    ${(props) => {
      switch (props.$animation) {
        case "up":
          return css`
            animation: ${animation.up} 0.5s ease forwards;
          `;
        case "down":
          return css`
            animation: ${animation.down} 0.5s ease forwards;
          `;
      }
    }}
  `,
};

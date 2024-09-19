import styled from "styled-components";

export default {
  Button: styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-size: 24px !important;
    background-position: center;
    background-image: url(${(props) => props.$image});
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
  `,
};

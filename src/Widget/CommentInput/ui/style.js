import styled, { keyframes } from "styled-components";

const border_change = keyframes`
    from {
        border-color: lightgrey;
    } to {
        border-color: grey;
    }
`;
export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px;
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
`;

import styled from "styled-components";

export const ShortsSection = styled.section`
  background-color: ${(props) => props.$bgColor};
  flex-grow: 1;
  position: relative;
  padding: 16px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100% - 67px);
`;

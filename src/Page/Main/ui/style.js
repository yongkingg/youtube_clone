import styled from "styled-components";

export const VideoContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 24px 12px;
  gap: 8px;
  background-color: ${(props) => props.$bgColor};
`;

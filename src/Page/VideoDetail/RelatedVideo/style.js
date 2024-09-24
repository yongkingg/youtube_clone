import styled from "styled-components";

export const RelatedVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 12px 0px;

  img {
    width: 168px;
    height: 94px;
    border-radius: 8px;
  }
`;

export const ColumnSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    color: ${(props) => props.theme.fontColor};
    font-family: var(--main-font);
    font-size: 14px;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-family: var(--main-font);
    font-size: 12px;
  }
`;

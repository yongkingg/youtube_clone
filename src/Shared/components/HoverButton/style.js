import styled from "styled-components";
const Button = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.$imageUrl});
  background-size: 32px; /* 이미지 크기 조정 */
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
`;

export default Button;

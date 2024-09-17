import styled from "styled-components";

// Button을 styled.button으로 정의
const Button = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-size: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.$imageUrl})`};

  &:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
`;

export default Button;

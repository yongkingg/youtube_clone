import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root {
        /* color */
        --main-color : white;
        --dark-color : #282828;

        /* font */
        --main-font : "Malgun Gothic";
    }
`;

// 그냥 dark랑 light에서 처리해도 괜찮았다.
// globalFont 선언할때 globalStyle 파일을 만들고 함.
// 이렇게 변수를 설정할거면, theme에 들어가고 글꼴을 새로 선언할거면 globalStyle로 넣자
// 글꼴, 색깔, 폰트사이즈 등등이 theme에

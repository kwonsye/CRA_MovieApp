import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

//전체 앱에 적용될 global style 작성
//App.js에 추가해주었다.
const globalStyle = createGlobalStyle`
    ${reset};    
    a {
        text-decoration : none;
        color: inherit;
    }
    *{
        box-sizeing: border-box; 
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
    }
`
//The CSS box-sizing :border-box property allows us to include the padding and border in an element's total width and height.

export default globalStyle;
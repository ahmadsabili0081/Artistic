import { createGlobalStyle } from "styled-components";
import ThemeList from "../Themes/ThemeList";
import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
 
const GlobalStyles = createGlobalStyle`
  :root{
    --dark-blue : #3b447a;
    --dark-blue-2 : #222b5f;
    --dark-blue-3 : #0a0f19;
    --dark-blue-4 : #101826;
    --meduimStateBlue : #6c62e2;
    --lightBlue_1 :#f3f1fe;
    --lightblue_2 : #adbde3;
    --white: #ffffff;
    --black : #000000; 
  }
  html{
    font-size: 10px;

  }
  body{
    background-color: ${(props) => 
    props.theme.theme === ThemeList.light 
    ? 'var(--lightBlue_1)' 
    : 'var(--dark-blue-3)'};
    font-family: 'Poppins', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  .container{
    max-width: 1200px;
    width: 90%;
    margin : 0px auto;
  }
  img,svg{
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyles;
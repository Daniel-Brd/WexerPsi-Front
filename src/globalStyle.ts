import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --light-gray: #F2F2F2;
    --gray-2: #4F4F4F;
    --gray-4: #BDBDBD;
    --gray-100: #F5F5F5;
    --gray-300: #E0E0E0;
    --gray-400: #868686;
    --gray-500: #9E9E9E;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
    --white: #FFFFFF;
    --main-green: #00995D;
    --light-green: #C5F2E0;
    --stronger-main-green: #017849;
    --sistem-red: #EB5757;
    --sistem-blue: #2F80ED;
    --sistem-purple: #9D28AC;
    --sistem-pink: #EA1E61;
  }
  
  *{
    
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  h1{margin: 0;}


  b{margin:0;}

  button{
    all: unset;
    cursor: pointer;
  }
`

export default GlobalStyle

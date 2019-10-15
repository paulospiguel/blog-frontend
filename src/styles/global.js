import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body, #root{
      height: 100%;
    }

    *{

      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body{
      background-color: #282c34;
      color: #fff;
      font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
    }



`;

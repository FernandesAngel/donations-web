import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1366px){
    html {
      font-size: 76.75%;
    }
  }

  @media(max-width: 1080px){
    html {
      font-size: 70.75%;
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 65.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  body, input, textarea, select, button  {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

`

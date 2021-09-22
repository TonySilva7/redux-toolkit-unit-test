import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --green-logo: #52CFC9;
    --purple-logo: #9CA2F4;
    --purple-dark: #424572;
    --blue-dark: #568FBC;
    --blue-light: #8BCBE1;
    --white-logo: #E2F1F4;

    --bg-transparent: rgba(255, 255, 255, .33);
  }  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ul {
      li {
        list-style: none;
      }
    }

    button {
      border: none;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  }

  
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    display:flex;
    justify-content: center;
    max-width: 1140px;
    margin: 0 auto;
  }
  

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin-top: 0;
  } 

  footer {
    margin-top: 20px;
    text-align: center;
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
  `;

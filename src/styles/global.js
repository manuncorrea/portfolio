import { createGlobalStyle, css } from 'styled-components';
import { below } from './responsive';

export const theme = {
  primary: '#673AB7',
  seccundary: '#953CCC',
  accent: '#F46036',
  titleOne: '#fff',
  titleTwo: '#000',
  text: '#70757a;',
};


export default createGlobalStyle`
   *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: #fff;
  }

  html {
    font-size: 62.5%;

    ${below('lg', css`
      font-size: 58%;
    `)}

    ${below('md', css`
      font-size: 54%;
    `)}
  }

  body, input, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, span, p {
    font-family: 'Inter', sans-serif;
  }

  button, Link, a {
    cursor: pointer;
  }
`;

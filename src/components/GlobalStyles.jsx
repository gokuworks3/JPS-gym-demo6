import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    line-height: 1.2;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

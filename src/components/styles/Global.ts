import { createGlobalStyle } from 'styled-components';

interface ITheme {
  colors: {
    header: string;
    body: string;
    footer: string;
  };
}

const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    color: white;
    margin:0;
  }
`;

export default GlobalStyles;

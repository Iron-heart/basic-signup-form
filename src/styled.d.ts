import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    text?: string;
    body?: string;
    gradient?: string;
    toggleBorder?: string;
    themeMode?: string;
    formColor?: string;
    borderPurple?: string;
  }
}

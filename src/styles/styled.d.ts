import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      gray100: string;
      gray200: string;
      gray500: string;
      gray800: string;

      green500: string;

      white: string;

      purple300: string;
      purple400: string;
      purple500: string;
      purple800: string;

      brightness: number;

      scrollbar: string;
    };
  }
}

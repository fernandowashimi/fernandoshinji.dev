import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        front: string;
        back: string;
      };

      text: {
        weak: string;
        normal: string;
        strong: string;
        link: string;
      };
    };
    font: {
      family: string;
    };
  }
}

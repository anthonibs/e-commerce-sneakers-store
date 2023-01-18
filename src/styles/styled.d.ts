import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundBody: string,

    font: {
      family: string,
      size: string,

      weights: {
        [400]: number,
        [700]: number,
      }
    },

    colors: {
      primary: {
        [100]: string,
        [200]: string,
      },
      neutral: {
        [100]: string,
        [200]: string,
        [300]: string,
        [400]: string,
        [500]: string,
        [600]: string,
      }
    }
  }
}
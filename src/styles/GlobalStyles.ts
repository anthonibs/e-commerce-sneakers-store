import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundBody};
    font-family: ${({ theme }) => theme.font.family};
    font-size:  ${({ theme }) => theme.font.size};
    font-weight: ${({ theme }) => theme.font.weights[400]}; 
    line-height: 1;

    &::-webkit-scrollbar {
      scroll-behavior: smooth;
      width: 10px;
    }	

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.neutral[700]};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary[100]};
    } 
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;
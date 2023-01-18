import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 260px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 23px;

  .container {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0 3rem;
    max-width: 1400px;
    justify-content: space-between;

    .footer-group {
      h3 {
        font-size: 1.325rem;
        color: ${({ theme }) => theme.colors.primary[100]};
        padding-bottom: 1.325rem;
      }
      
      ul li {
        a {
          text-decoration: none;
          font-size: 1rem;
          transition: color .3s ease-in;
          color: ${({ theme }) => theme.colors.neutral[100]};
          
          &:hover {  
            color: ${({ theme }) => theme.colors.primary[100]};
          }
        }   
      }

      > div {
        display: flex;
        gap: 1rem;

        a svg {
          font-size: 42px;
          transition: all .5s ease-in;
          fill: ${({ theme }) => theme.colors.neutral[100]};
          
          &:hover {
            fill: ${({ theme }) => theme.colors.primary[100]};
          }
        }
      }

      > address p {
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.neutral[100]};
        text-decoration: none;      
        font-size: 1rem;
        transition: all .5s ease-in;

        &:hover {
          color: ${({ theme }) => theme.colors.primary[100]};
        }
      }
    }
  }
`;
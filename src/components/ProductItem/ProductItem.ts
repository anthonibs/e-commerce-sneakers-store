import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 3rem;
  height: 100%; 

  article {
    display: flex;
    gap: 6rem;

    figure {
      width: 40%;
      height: 100%;
      overflow: hidden;
      border-radius: 20px;

      img {
        display: block;
        width: 100%;
        height: 320px;
        object-fit: cover;
        object-position: center;
      }
    }

    div {
      width: 60%;

      header {
        span {
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.primary[100]};
          font-weight: ${({ theme }) => theme.font.weights[700]};
        }

        h2 {
          text-transform: capitalize;
          font-size: 2rem;
          line-height: 1.1;
          margin-top: 1.3rem;
          color: ${({ theme }) => theme.colors.neutral[100]};
          font-weight: ${({ theme }) => theme.font.weights[700]};
        }
      }

      .description-wrap {
        width: 100%;

        p {
          font-size: 1rem;
          word-break: break-word;
          color: ${({ theme }) => theme.colors.neutral[200]};
          line-height: 1.5;
        }
      }

      .current-price {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        line-height: 1.825rem;

        .price {
          font-size: 2rem;
          font-weight: ${({ theme }) => theme.font.weights[700]};
        }

        .discount {
          display: block;
          font-size: 1rem;
          height: 100%;
          width: 50px;
          border-radius: .325rem;
          text-align: center;
          background-color:  ${({ theme }) => theme.colors.primary[200]};
          color: ${({ theme }) => theme.colors.primary[100]};
          font-weight: ${({ theme }) => theme.font.weights[700]};
        }
      }

      .previous-price {
        display: block;
        font-size: 1.125rem;
        margin-top: .625rem;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.neutral[300]};
        font-weight:${({ theme }) => theme.font.weights[700]};
      }
    }

    .wrapper-button {
      display: flex;
      margin-top: 2rem;
      gap: 1rem;
      width: 100%;

      .control-button-cart {
        display: flex;
        width: fit-content;
        align-items: center;
        overflow: hidden;
        border-radius: .625rem;

        .minus, .plus, .quantity {
          background-color: ${({ theme }) => theme.colors.neutral[400]};
          height: 50px;
          width: 80px;
          display: flex;
          align-items: center;
          cursor: pointer;
          justify-content: center;
        }

        .minus:disabled, .plus:disabled {
          background-color: ${({ theme }) => theme.colors.neutral[700]};
          transition: all .6s ease-in-out;
          cursor: default;
        }

        .minus svg  use , .plus svg  use {
          transition: all .5s ease-in-out;
          fill: ${({ theme }) => theme.colors.primary[100]};
        }

        .minus:hover svg  use , .plus:hover svg  use {
          fill: ${({ theme }) => theme.colors.primary[300]};
        }

        .minus:disabled svg use, .plus:disabled svg use {
          fill: ${({ theme }) => theme.colors.primary[300]};
        }

        .quantity {
          font-size: 1.325rem;
          color: ${({ theme }) => theme.colors.neutral[600]};
          font-weight: ${({ theme }) => theme.font.weights[700]};
        }
      }

      .button-add-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: .625rem;
        color: ${({ theme }) => theme.colors.neutral[500]};
        font-weight: ${({ theme }) => theme.font.weights[700]};
        border-radius: .625rem;
        background-color: ${({ theme }) => theme.colors.primary[100]};
        cursor: pointer;
        transition: all .5s ease-in-out;

        svg {
          path {
            fill: ${({ theme }) => theme.colors.neutral[500]};
          }
        }

        &:focus-visible, &:hover {
          outline: none;
          box-shadow: ${({ theme }) => theme.colors.primary[300]}0px 7px 29px 0px;
          background-color: ${({ theme }) => theme.colors.primary[300]};
        }
      }
    }
  }
`;
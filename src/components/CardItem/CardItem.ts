import styled from 'styled-components';

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  height: 100%;

  figure {
    position: relative;
    width: 100%;
    height: 260px;

    div {
      position: absolute;
      right: 10px;
      width: 50px;
      height: 55px;
      clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
      background-color: ${({ theme }) => theme.colors.primary[100]};
      pointer-events: none;  
      
      span {
        display: block;
        line-height: 45px;
        font-size: .8rem;
        font-weight: ${({ theme }) => theme.font.weights[700]};
        text-align: center;
      }
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  header {
    margin-top: .325rem;
    padding: 0 .625rem;
    height: fit-content;
    
    h2 {
      font-size: 1.125rem;
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.font.weights[400]};
      color: ${({ theme }) => theme.colors.neutral[100]};
    }
  }

  section {
    position: relative;
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;

    .star-rating {
      display: block;
      padding: .325rem .625rem;
    }

    .free-shipping {
      padding: 0 .625rem;
      color: #04BF45;
      font-weight:  ${({ theme }) => theme.font.weights[700]};
    }

    .priceOf {
      display: block;
      padding: .625rem .625rem .125rem;
      font-size: 1rem;
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.neutral[300]};
      font-weight:  ${({ theme }) => theme.font.weights[700]};
    }

    .current-price {
      display: block;
      padding: .325rem .625rem;
      font-size: 1.825rem;
      letter-spacing: 2px;
      color: ${({ theme }) => theme.colors.neutral[600]};
      font-weight:  ${({ theme }) => theme.font.weights[700]};
    }

    .value-installments {
      padding: 0 .625rem;
      line-height: 2rem;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.neutral[400]};
      gap: .625rem;
      color: ${({ theme }) => theme.colors.neutral[200]};
      font-size: 1.25rem;

      svg {
        fill: ${({ theme }) => theme.colors.primary[100]};
      }
    }
  }
`;
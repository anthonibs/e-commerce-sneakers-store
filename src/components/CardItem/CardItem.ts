import styled from 'styled-components';

export const CardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  height: 100%;
  width: 100%;
`;

export const FigureContainer = styled.figure`
  @media (min-width: 375px) {
    height: 200px; 
    position: relative;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    height: 260px; 
  }
`;

export const ContainerPercentage =  styled.div`
  @media (min-width: 375px) {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
    height: 45px;
    position: absolute;
    pointer-events: none;  
    right: 6px;
    width: 40px;
  } 

  @media (min-width: 768px) {
    height: 55px;
    right: 10px;
    width: 50px;
  } 
`;

export const Percentage = styled.span`
  @media (min-width: 375px) {
    display: block;
    font-size: .7rem;
    font-weight: ${({ theme }) => theme.font.weights[700]};
    line-height: 40px;
    text-align: center; 
  }

  @media (min-width: 768px) {
    font-size: .8rem;
    line-height: 45px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  height: fit-content;
  margin-top: .325rem;
  padding: 0 .625rem;
`;

export const HeaderTitle = styled.h2`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[100]}; 
    font-size: .9rem;
    font-weight: ${({ theme }) => theme.font.weights[400]};
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ControlInfo = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  position: relative;
`;

export const ControlStarRating = styled.span`
  display: block;
  padding: .325rem .625rem;
`;

export const FreeShipping = styled.p`
  @media (min-width: 375px) {
    color: #04BF45;
    font-size: .8rem;
    font-weight:  ${({ theme }) => theme.font.weights[700]}; 
    padding: 0 .625rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const PriceOf = styled.span`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[300]};
    display: block;
    font-size: .8rem;
    font-weight:  ${({ theme }) => theme.font.weights[700]}; 
    padding: .625rem .625rem .125rem;
    text-decoration: line-through;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const CurrentPrice = styled.span`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[600]};
    display: block;
    font-size: 1.25rem;
    font-weight:  ${({ theme }) => theme.font.weights[700]}; 
    letter-spacing: 2px;
    padding: .325rem .625rem;
  }

  @media (min-width: 768px) {
    font-size: 1.825rem; 
  }
`;

export const ValueInstallments = styled.p`
  @media (min-width: 375px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[400]};
    color: ${({ theme }) => theme.colors.neutral[200]};
    display: flex;
    font-size: .9rem; 
    gap: .625rem;
    line-height: 2rem;
    padding: 0 .625rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem; 
  }

  svg {
    fill: ${({ theme }) => theme.colors.primary[100]};
  }
`;
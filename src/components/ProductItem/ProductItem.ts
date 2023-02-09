import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 375px) {
    height: 100%;
    padding-bottom: 4rem;
    position: relative;
    width: 100%;
  }

  @media (min-width: 768px) {
    padding-top: 1rem; 
  }
  
  @media (min-width: 1000px) {
    padding: 4rem 0 6rem; 
  }
`;

export const Article = styled.article`
  @media (min-width: 375px) {
    align-items: center;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1000px) {
    gap: 4rem;
    grid-template-columns: 50% 50%; 
    padding-left: 0rem;
    width: 100%;
  }

  @media (min-width: 1200px) {
    gap: 6rem;
    grid-template-columns: 40% 1fr; 
    padding-left: 3rem;
  }
`;

export const ContainerInfo = styled.div`
  @media (min-width: 375px) {
    margin: 0 auto;
    max-width: 100%;   
    width: 90%;
  }
  
  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: calc(100% - 4rem);
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
`;

export const Company = styled.span`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.primary[100]};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.weights[700]}; 
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ProductName = styled.h2`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.font.weights[700]}; 
    line-height: 1;
    margin-top: .6rem;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    font-size: 2.33rem;
    line-height: 1.1;
    margin-top: 1.3rem;
  }
`;

export const DescriptionWrap = styled.div`
  @media (min-width: 375px) {
    margin-top: 1rem;  
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;  
  }
`;

export const TextDescription = styled.p`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[200]};
    font-size: .9rem;
    line-height: 1.6;
    word-break: break-word;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const PriceWrap = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: 1.825rem;
    margin-top: 2rem;

    > div {
      display: flex;
      gap: 1rem; 
    } 
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CurrentPrice = styled.span`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const ProductDiscount = styled.span`
  border-radius: .325rem;
  background-color:  ${({ theme }) => theme.colors.primary[200]};
  color: ${({ theme }) => theme.colors.primary[100]};
  display: block;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font.weights[700]};
  height: 100%;
  text-align: center;
  width: 50px;
`;

export const PreviousPrice = styled.span`
  color: ${({ theme }) => theme.colors.neutral[300]};
  display: block;
  font-size: 1.125rem;
  font-weight:${({ theme }) => theme.font.weights[700]};
  text-decoration: line-through;

`;

export const WrapperButton = styled.div`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%; 
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ControlButtonCart = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    border-radius: .625rem; 
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const ButtonCart = styled.button`
  @media (min-width: 375px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[400]};
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 100%;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.neutral[700]};
      cursor: default;
      transition: all .6s ease-in-out;
    }

    & svg {
      fill: ${({ theme }) => theme.colors.primary[100]};
      transition: all .5s ease-in-out;
    }

    &:hover svg {
      fill: ${({ theme }) => theme.colors.primary[300]};
    }

    &:disabled svg {
      fill: ${({ theme }) => theme.colors.primary[300]};
    } 
  }

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const QuantityProduct = styled.span`
  @media (min-width: 375px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[400]};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral[600]};
    display: flex;
    font-size: 1.325rem;
    font-weight: ${({ theme }) => theme.font.weights[700]}; 
    height: 50px;
    justify-content: center;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const AddProductCart = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  border-radius: .625rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[500]};
  display: flex;
  font-weight: ${({ theme }) => theme.font.weights[700]};
  gap: .625rem;
  height: 50px;
  justify-content: center;
  transition: all .5s ease-in-out; 
  width: 100%;
  
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral[500]};
    }
  }

  &:focus-visible, &:hover {
    background-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: ${({ theme }) => theme.colors.primary[300]}0px 7px 29px 0px;
    outline: none;
  }
`;
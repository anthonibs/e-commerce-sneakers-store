import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.article`
  display: grid;
  gap: 6rem;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  padding-left: 3rem;
  grid-template-columns: 40% 1fr;
`;

export const ContainerInfo = styled.div`
  width:100%;
  max-width: 100%;
`;

export const TitleContainer = styled.div`
`;

export const Company = styled.span`
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary[100]};
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const ProductName = styled.h2`
  text-transform: capitalize;
  font-size: 2.33rem;
  line-height: 1.1;
  margin-top: 1.3rem;
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const DescriptionWrap = styled.div`
  width: 100%;
  margin-top: 2rem; 
`;

export const TextDescription = styled.p`
  font-size: 1rem;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.neutral[200]};
  line-height: 1.6;
`;

export const PriceWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.825rem;
`;

export const CurrentPrice = styled.span`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const ProductDiscount = styled.span`
  display: block;
  font-size: 1rem;
  height: 100%;
  width: 50px;
  border-radius: .325rem;
  text-align: center;
  background-color:  ${({ theme }) => theme.colors.primary[200]};
  color: ${({ theme }) => theme.colors.primary[100]};
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const PreviousPrice = styled.span`
  display: block;
  font-size: 1.125rem;
  margin-top: .625rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.neutral[300]};
  font-weight:${({ theme }) => theme.font.weights[700]};
`;

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
  width: 100%;
`;

export const ControlButtonCart = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  overflow: hidden;
  border-radius: .625rem;
`;

export const ButtonCart = styled.button`
  background-color: ${({ theme }) => theme.colors.neutral[400]};
  height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[700]};
    transition: all .6s ease-in-out;
    cursor: default;
  }

  & svg use {
    transition: all .5s ease-in-out;
    fill: ${({ theme }) => theme.colors.primary[100]};
  }

  &:hover svg  use {
    fill: ${({ theme }) => theme.colors.primary[300]};
  }

  &:disabled svg use {
    fill: ${({ theme }) => theme.colors.primary[300]};
  }
`;

export const QuantityProduct = styled.span`
  background-color: ${({ theme }) => theme.colors.neutral[400]};
  height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 1.325rem;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-weight: ${({ theme }) => theme.font.weights[700]};
`;

export const AddProductCart = styled.button`
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
`;
import styled from 'styled-components'; 3;

export const Container = styled.div`
  @media (min-width: 375px) {
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    height: 100vh;
    padding: 0 1rem;
    position: fixed;
    right: -100%;
    top: 0;
    transition: right .6s ease-in;
    width: 100%;
    z-index: 9999;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1000px) {
    display: none 
  }

  &.active-filter {
    right: 0%;
  }

`;

export const Header = styled.header`
  height: 60px;
  width: 100%;
`;

export const ButtonGoBack = styled.button`
  align-items: center;  
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[200]};
  display: flex;
  height: 100%;
  font-size: 1.5rem;
  font-weight:  ${({ theme }) => theme.font.weights[700]};
  margin-top: 1rem; 
  width: 100%;

  > svg {
    font-size: 1.2rem;
    margin-right: calc(50% - 55px);
  }

  &:focus-visible {
    border-radius: .2rem;
    outline: 2px solid ${({theme}) => theme.colors.neutral[200]}; 
  }
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;
import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 375px) {
    height: 100%;
    margin-bottom: 4rem;
    position: relative;
    width: 100%;
    z-index: 100; 
  }

  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const ListContainer = styled.ul`
  @media (min-width: 375px) {
    display: grid;
    gap: 4rem 1.325rem;
    grid-template-columns: repeat( auto-fit, minmax(280px, 1fr));
    height: 100%;
    margin: 2rem auto 0;
    width: 95%; 
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    width: 100%; 
  }
`;

export const ListItem = styled.li`
  height: 100%;
  width: 100%;
`;


export const CategoryContainer = styled.section`
  max-width: 1400px;
  margin-top: 2rem;
  width: 100%;

  & + & {
    margin-top: 3rem;
  }
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.neutral[600]};
  font-size: 1.825rem;
  letter-spacing: 2px;
  position: relative;
  width: fit-content;

  &::after {
    bottom: -8px;
    background-color: ${({theme}) => theme.colors.primary[100]};
    border-radius: 10px;
    content: '';
    display: flex;
    flex-direction: column;
    height: 5px;
    left: 0;
    position: absolute;
    width: 76%;
  }
`;


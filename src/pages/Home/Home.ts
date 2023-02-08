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
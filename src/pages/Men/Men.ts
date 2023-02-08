import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 375px) {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      'header header'
      'aside product'
    ;
    margin: 1rem auto 4rem; 
    width: 96%;
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
    grid-template-columns: 200px 1fr;
    grid-template-areas: 
      'aside header'
      'aside product'
    ;
    margin: 1rem 0 6rem;
    width: 100%;
  }

  @media (min-width: 1000px) {
    column-gap: 3rem;
  }
`;

export const HeaderFilter = styled.div`
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  margin-bottom: .625rem;
  width: 100%;
`;

export const ShowingResults = styled.p`
  @media (min-width: 375px) {
    color: ${({theme}) => theme.colors.neutral[600]};
    font-size: .725rem;
    width: 50%; 
  }
  
  @media (min-width: 768px) {
    font-size: .9rem;
  }
`;

export const ControlFilter = styled.div`
  @media (min-width: 375px){
    align-items: center;
    display: flex;
    gap: .325rem;
    justify-content: flex-end;
    width: 100%; 
  }

  @media (min-width: 768px){
    gap: 1rem;
  }
`;

export const LabelFilter = styled.span`
  @media (min-width: 375px) {
    color: ${({theme}) => theme.colors.neutral[600]};
    display: block;
    font-size: .725rem;
    width: fit-content;
  }

  @media (min-width: 768px) {
    font-size: .9rem; 
  }
`;

export const AsideContainerFilter = styled.aside`
  border-radius: .125rem;
  background-color: ${({theme}) => theme.colors.neutral[400]};
  display: flex;
  flex-direction: column;
  gap: .8rem;
  grid-area: aside;
  height: fit-content;
  padding: .625rem;
  width: 100%;
`;

export const ListContainer = styled.ul`
  @media (min-width: 375px) {
    display: grid;
    gap: 2rem .825rem;
    grid-area: product;
    grid-template-columns:  repeat(auto-fill, minmax(200px, 1fr));
    height: 100%;
    width: 100%; 
  }

  @media (min-width: 768px) {
    gap: 4rem 1.325rem;
    grid-template-columns:  repeat(auto-fill, minmax(270px, 1fr));
  }
`;

export const ListItem = styled.li`
  height: 100%;
  width: 100%;
`;

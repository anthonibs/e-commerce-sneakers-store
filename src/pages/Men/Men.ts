import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 375px) {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      'header'
      'product'
    ;
    margin: 1rem auto 4rem; 
    width: 96%;
  }

  @media (min-width: 1000px) {
    column-gap: 3rem;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
      'aside header'
      'aside product'
    ;
    height: 100%;
    margin: 2rem 0 6rem;
    width: 100%;
  }
`;

export const SectionProducts = styled.section`
`;


export const AsideContainerFilter = styled.aside`
  border-radius: .125rem;
  background-color: ${({ theme }) => theme.colors.neutral[400]};
  display: flex;
  flex-direction: column;
  gap: .8rem;
  grid-area: aside;
  height: fit-content;
  padding: .625rem;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  grid-area: header;
  margin-bottom: .625rem;
  width: 100%;
`;

export const PageSummary = styled.div`
  margin-bottom: 1.6rem;

  > h2 {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: 1.625rem;
  }
  
  > p {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: .925rem;
    line-height: 1.2;
    margin-top: .625rem;
  }
`;

export const ContainerFilter = styled.div`
  align-items: center;
  display: flex;
`;

export const ShowingResults = styled.p`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: .725rem;
    white-space: nowrap;
    width: fit-content; 
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
    gap: .6rem;
  }
`;

export const LabelFilter = styled.span`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[600]};
    display: block;
    font-size: .725rem;
    white-space: nowrap;
    width: fit-content;
  }

  @media (min-width: 768px) {
    font-size: .9rem; 
  }
`;

export const ButtonModalFilter = styled.button`
  align-items: center;
  border-radius: .325rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral[200]};
  cursor: pointer;
  display: flex;
  font-size: .825rem;
  gap: .25rem;
  line-height: 20px;
  padding: .325rem;
  transition: all .2s ease-out;


  & > svg {
    fill: ${({ theme }) => theme.colors.neutral[200]};
    pointer-events: none;
  }

  &:hover > svg, &:hover {
    color: ${({ theme }) => theme.colors.neutral[300]};    
    fill: ${({ theme }) => theme.colors.neutral[300]};
    transition: all .2s ease;
  }
`;

export const ListContainer = styled.ul`
  @media (min-width: 375px) {
    display: grid;
    height: fit-content;
    grid-area: product;
    gap: 2rem .825rem;
    width: 100%;

    &.default {
      grid-template-columns: 1fr;
    }

    &.double-columns {
      grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    }

    &.fullsize-image {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 700px) { 
    &.double-columns {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  @media (min-width: 1000px) { 
    &.default, &.double-columns, &.fullsize-image {
      gap: 3rem 1rem;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }
`;

export const ListItem = styled.li`
  height: 100%;
  width: 100%;
`;

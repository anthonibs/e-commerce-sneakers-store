import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  margin-bottom: 6rem;
  width: 100%;
`;

export const ListContainer = styled.ul`
  display: grid;
  gap: 4rem 1.325rem;
  grid-template-columns: repeat( auto-fit, minmax(280px, 1fr));
  margin-top: 3rem;
  height: 100%;
  width: 100%;
`;

export const ListItem = styled.li`
  height: 100%;
  width: 100%;
`;
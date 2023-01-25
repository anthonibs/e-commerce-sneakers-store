import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 6rem;
 
  ul {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 4rem 1.325rem;
    grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );

    li {
      width: 100%;
      height: 100%;
    }
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  height:100%;

  main {
    @media (min-width: 375px) {
      height: 100%;
      margin: 0 auto;
      min-height: calc(100vh - 270px);
      padding-top: calc(70px + .625rem);
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 90%;
    }

    @media (min-width: 1000px) {
      max-width: 1400px;
      padding-top: calc(100px + .625rem);
      width: 80%;
    }
  }
`;
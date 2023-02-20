import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1em;
  height: 380px;

  .slick-slider, .slick-list, .slick-track {
    height: 100%;
    width: 100%;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  } 
  
  .slick-prev,
  .slick-next {
    height: 28px;
    width: 28px;
    z-index: 100;
  }

  .slick-prev::before,
  .slick-next::before {
    font-family: 'slick';
    font-size: 28px;
    line-height: 1;
    opacity: .8;
    color: whitesmoke;
    transition: all .4s ease;
  }

  .slick-prev:hover::before,
  .slick-next:hover::before {
    opacity: .7;
    color: ${({theme}) => theme.colors.primary[100]};
  }

  @media (min-width: 768px) {
    height: 500px;

    .slick-prev {
      left: -23px;
    }

    .slick-next {
     right: -23px;
    } 
  }
`;

export const Card = styled.div`
  margin-top: 1.6rem;
  padding: 0 .6rem;

  > figure {
    width: 100%;
    height: 200px;
    display: block;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
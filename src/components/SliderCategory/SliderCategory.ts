import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1em;

  @media (min-width: 375px) {
    .slick-slider {
      height: 380px;
      width: 100%;
      cursor: grabbing;
    }

    .slick-active, .slick-list {
      height: 380px;
    }

    .slick-prev {
      left: 0;
    }

    .slick-next {
     right: 0;
    } 
  }

  @media (min-width: 500px) {
    .slick-slider {
      height: 450px;
      width: 100%;
      cursor: grabbing;
    }

    .slick-active, .slick-list {
      height: 450px;
    }
  }

  @media (min-width: 768px) {
    .slick-slider {
      height: 500px;
    }

    .slick-active, .slick-list {
      height: 500px;
    }

    .slick-prev {
      left: -23px;
    }

    .slick-next {
     right: -23px;
    } 
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
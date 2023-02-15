import styled, { keyframes } from 'styled-components';

const animationImage = keyframes`
  from {
    background: #ffffffb2;
    outline: 3px solid #FF7A1A;
    opacity: 0%;
  }

  to {
    background: #ffffffb2;
    outline: 3px solid #FF7A1A;
    opacity: 100%;
  }
`;

export const Container = styled.figure`
  height: 100%;
  width: 100%;  
`;

export const MainProductImage = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    border-radius: .2rem;
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;

    > img {
      display: block;
      height: 380px;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }

    .next-slider {
      top: 50%;
      transform: translateY(-50%);
    } 
  }

  @media (min-width: 1000px) {
    border-radius: 20px;

    .previous-slider {
      display: none;
    }

    .next-slider {
      display: none;
    } 
  }
`;

export const GalleriesProducts = styled.ul`
  @media (min-width: 375px) {
    display: none;
  }

  @media (min-width: 1000px) {
    display: grid;
    gap: 1.3rem;
    grid-template-columns: repeat( auto-fit, minmax(80px, 1fr));
    height: auto; 
    margin-top: 1.75rem;
    position: relative;
    width: 100%;
  }
`;

export const GalleryProduct = styled.li`
  height: 100%;
  outline: none;
  outline: 3px solid transparent;
  position: relative;
  width: 100%;

  &:focus-visible::before, 
  &:hover::before  {
    animation: ${animationImage} 1s ease-out forwards;
    bottom: 0;
    border-radius: 10px;
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    transition: all .3s ease;
    width: 100%;
    z-index: 1000;
  }

  > img {
    border-radius: 10px;
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    width: 100%;
  }
`;

export const OverlayImage = styled.div`
  @media (min-width: 375px) {
    display: none;
  }

  @media (min-width: 1000px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[600]};
    display: flex;
    height: 100vh;
    justify-content: center;
    left:0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
`;

export const CardOverlay = styled.div`
  max-width: 720px;  
  position: relative;
  top: -50px;
`;

export const ClosedOverlayCard = styled.button`
  border-radius: 20px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  height: 40px;
  line-height: 35px;
  padding: .325rem;
  position: absolute;
  right: 0px;
  top: -50px;
  transition: background .3s ease-in-out;
  width: 40px;
  z-index: 999;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[700]};;
  }

  > svg  {
    > path {
      fill: ${({ theme }) => theme.colors.neutral[500]};
    }
  } 
`;

export const MainImage = styled.div`
  border-radius: 1rem;
  display: block;
  height: 100%;
  max-height: 540px;
  overflow: hidden;
  width: 100%;
`;

export const ImageModalMain = styled.img`
  display: block;
  height: inherit;
  max-height: inherit;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const PreviousSlider = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    left: 20px;
    max-height: inherit;
    position: absolute;
    width: 60px; 
  }

  @media (min-width: 1000px) {
    left: -30px;
  }
`;

export const NextSlider = styled.div`
   @media (min-width: 375px) {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    max-height: inherit;
    right: 20px;
    position: absolute;
    top: 0;
    width: 60px; 
  }

  @media (min-width: 1000px) {
    right: -30px;
  }
`;

export const ButtonControl = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  padding: .5rem;
  transition: all .3s ease-in-out;
  width: 60px;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px;
    background-color: ${({ theme }) => theme.colors.neutral[700]};
  }
`;

export const ThumbnailItems = styled.ul`
  display: flex;
  gap: 2rem;
  height: 30px;
  margin: 0 auto;
  margin-top: 2rem;
  width: 85%;
`;

export const ThumbnailItem = styled.li`
  border-radius: 10px;
  height: 100px;
  outline: 3px solid transparent;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover, 
  &:focus-visible {
    animation: ${animationImage} 1s ease-out forwards;
  }

  &:hover::before,
  &:focus-visible::before {
    animation: ${animationImage} 1s ease-out forwards;
    bottom: 0;
    content: '';
    height: 100%;
    right: 0;
    position: absolute;
    transition: all .3s ease;
    width: 100%;
    z-index: 1000;
  }

  > img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    width: 100%;
  }
 
  &.active-slider {
    animation: ${animationImage} .6s ease-out forwards;
    
    &::before {
      animation: ${animationImage} .6s ease-out forwards;
      bottom: 0;
      content: '';
      height: 100%;
      right: 0;
      position: absolute;
      transition: all .3s ease;
      width: 100%;
      z-index: 1000;
    }
  }
`;
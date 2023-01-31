import styled, { keyframes } from 'styled-components';

const animationImage = keyframes`
  from {
    background: #ffffffb2;
    outline: 3px solid #FF7A1A;
    opacity: 0%;
  }

  to {
    outline: 3px solid #FF7A1A;
    background: #ffffffb2;
    opacity: 100%;
  }
`;

export const Container = styled.figure`
  width: 100%;
  height: 100%;
`;

export const MainProductImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;

  > img {
    display: block;
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: center;
  }
`;

export const GalleriesProducts = styled.ul`
  position: relative;
  display: grid;
  gap: 1.3rem;
  width: 100%;
  margin-top: 1.75rem;
  grid-template-columns: repeat( auto-fit, minmax(80px, 1fr));
  height: auto;
`;

export const GalleryProduct = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  outline: none;
  outline: 3px solid transparent;

  &:hover::before {
    content: '';
    transition: all .3s ease;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    animation: ${animationImage} 1s ease-out forwards;
    z-index: 1000;
  }

  > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
  }
`;

export const OverlayImage = styled.figure`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const CardOverlay = styled.div`
  position: relative;
  top: -150px;
  max-width: 720px; 
`;

export const ClosedOverlayCard = styled.button`
  position: absolute;
  top: -50px;
  right: 0px;
  z-index: 999;
  color: white;
  font-size: 1rem;
  padding: .325rem;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  line-height: 35px;
  background-color: transparent;
  transition: background .3s ease-in-out;
  cursor: pointer;
  
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
  height: fit-content;
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 1rem;
  overflow: hidden;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PreviousSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -30px;
  height: 100%;
  width: 60px;
`;

export const NextSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -30px;
  top: 0;
  height: 100%;
  width: 60px;
`;

export const ButtonControl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 30px;
`;

export const ThumbnailItems = styled.ul`
  display: flex;
  margin: 0 auto;
  height: 30px;
  width: 85%;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ThumbnailItem = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  outline: 3px solid transparent;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    animation: ${animationImage} .6s ease-out forwards;
  }

  &:hover::before {
    content: '';
    transition: all .3s ease;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    animation: ${animationImage} 1s ease-out forwards;
    z-index: 1000;
  }

  > img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
 
  &.active-slider {
    animation: ${animationImage} .6s ease-out forwards;
    
    &::before {
      content: '';
      animation: ${animationImage} .6s ease-out forwards;
      transition: all .3s ease;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1000;
    }
  }
`;
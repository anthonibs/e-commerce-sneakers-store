import styled, { keyframes } from 'styled-components';

const buttonTop = keyframes`
  from {
    bottom: 0;
    opacity: .3;
  }
  to {
    bottom: 20px;
    opacity: 1;
  }
`;

const fadeScrollTop = keyframes`
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`;

export const Container = styled.div`
  animation: ${fadeScrollTop} 1s forwards;
  background-color: transparent;
  border-radius: 50%;
  bottom: 0px;
  cursor: pointer;
  height: 50px;
  position: fixed;
  right: 20px;
  transform: scale(.75);
  transition: all .3s linear;
  visibility: hidden;
  width: 50px;
  z-index: 1000;

  &.active-scrolltop {
    animation: ${buttonTop} 1s forwards;
    display: block;
    visibility: visible;
  }

  .arrow-top {
    color: ${({ theme }) => theme.colors.neutral[300]};
    font-size: 1.6rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: all .6s ease;
    transform: translate(-50%, -50%);
  }

  &:hover .arrow-top {
    color: ${({ theme }) => theme.colors.primary[100]};
    transition: all .6s ease;
  }

  &:hover {
    transform: scale(.8);
    transition: all .3s linear;
  }

 .circle-progress {
    height: 50px;
    position: relative;
    transform: rotate(280deg);
    width: 50px;
    z-index: 1000;
  }
  
 .circle-progress circle {
    fill: none;
    height: 100%;
    stroke-width: 2;
    stroke-linecap: round;
    stroke: ${({ theme }) => theme.colors.neutral[400]};
    transform: translate(0px, 0px);
    width: 100%;
  }

 .circle-progress circle:nth-child(2) {
    stroke-dasharray: 170;
    stroke-dashoffset: 170;
  }

 .circle-progress circle:nth-child(2) {
    stroke: ${({ theme }) => theme.colors.primary[100]};
  }
`;
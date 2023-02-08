import styled, { keyframes } from 'styled-components';

const hiddenFilterOrder = keyframes`
  from {
    top: 0;
    opacity: 100%;
  }

  to {
    display: none;
    visibility: hidden;
    top: -4px;
    opacity: 80%;
  }
`;

const fade = keyframes`
 from {
    top: -4px;
    opacity: 80%;
  }
  to {
    opacity: 100%;
  }
`;


export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.neutral[400]};
  height: fit-content;
  position: relative;
 
  @media (min-width: 375px) {
      & + &::before {
      content: '';
      position: absolute;
      width: 48%;
      height: 3px;
      top: -.5rem;
      background-color: ${({theme}) => theme.colors.neutral[300]};
      border-radius: 8px;
    } 
  }

  @media (min-width: 768px) {
    & + &::before {
      width: 68%;
    } 
  }
`;

interface ITitleFilter {
  open: boolean;
}

export const TitleFilter = styled.span<ITitleFilter>`
  @media (min-width: 375px) {
    align-items: center;
    border-radius: .2rem;
    background-color: ${({theme}) => theme.colors.primary[100]};
    cursor: pointer;
    color:  ${({theme}) => theme.colors.neutral[500]};
    display: flex;
    font-size: .625rem;
    font-weight: ${({theme}) => theme.font.weights[700]};
    height: 30px;
    justify-content: space-between;
    padding: 0 .325rem;
    text-transform: uppercase;

    > svg {
      transition: transform .4s;
      transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0deg)' };
    } 
  }
  
  @media (min-width: 768px) {
    font-size: .725rem;
    height: 35px;
    letter-spacing: 2px;
    padding: 0 1rem;
  }
`;

export const FilterOrderContainer = styled.ul`
  border-bottom-right-radius: .325rem;
  border-bottom-left-radius: .325rem; 
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  overflow: auto;
  position: relative;
  top: -4px;

  &.active-menu-order {
    animation: ${fade} .6s forwards;
    height: fit-content;
    max-height: 180px;
  }

  &.disabled-menu-order {
    animation: ${hiddenFilterOrder} .3s forwards;
    height: 0px;
  }

  &::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 6px;
  }	

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary[200]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const FilterOrderItem = styled.li`
  @media (min-width: 375px) {
    cursor: pointer;
    font-size: .7rem;
    padding: .5rem .325rem;
    position: relative; 
  }

  @media (min-width: 768px) {
    font-size: .8rem;
    padding: .625rem 1rem;
  }

  &:not(.active-filter):hover {
    background-color: #e7e7e775;
  }

  &.active-filter {
    background-color: #e7e7e7;
  }
`;

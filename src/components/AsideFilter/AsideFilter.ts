import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 20%;
  }
  
  to {
    opacity: 100%;
  }
`;


export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.neutral[400]};
  height: fit-content;
  position: relative;
`;


interface ITitleFilter {
  isOpen: boolean;
}

export const TitleFilter = styled.button<ITitleFilter>`
  @media (min-width: 375px) {
    align-items: center;
    border-radius: ${({isOpen}) => !isOpen ? '.2rem' : '.2rem .2rem 0 0'};
    background-color: ${({theme}) => theme.colors.primary[100]};
    cursor: pointer;
    color:  ${({theme}) => theme.colors.neutral[500]};
    display: flex;
    font-size: .825rem;
    font-weight: ${({theme}) => theme.font.weights[700]};
    height: 45px;
    justify-content: space-between;
    padding: 0 .325rem;
    text-transform: uppercase;
    width: 100%;

    > svg {
      transition: transform .4s;
      transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)' };
    }
  }
  
  @media (min-width: 768px) {
    font-size: .825rem;
    height: 45px;
    letter-spacing: 1px;
    padding: 0 1rem;
  }
`;


export const FilterOrderContainer = styled.ul`
  border-bottom-right-radius: .325rem;
  border-bottom-left-radius: .325rem; 
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  overflow: auto;
  position: relative;

  &.active-menu-order {
    animation: ${fade} 1s forwards;
    display: block;
    height: fit-content;
    max-height: 180px;
    visibility: visible;
  }

  &.disabled-menu-order {
    display: none;
    height: 0px;
    visibility: hidden;
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
    font-size: .8rem;
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

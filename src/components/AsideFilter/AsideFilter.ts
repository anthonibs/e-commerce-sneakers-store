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
  border-radius: .325rem;
  background-color: ${({theme}) => theme.colors.neutral[400]};
  height: fit-content;
`;

interface ITitleFilter {
  open: boolean;
}

export const TitleFilter = styled.span<ITitleFilter>`
  align-items: center;
  border-radius: .2rem;
  background-color: ${({theme}) => theme.colors.primary[100]};
  cursor: pointer;
  color:  ${({theme}) => theme.colors.neutral[500]};
  display: flex;
  font-size: .725rem;
  font-weight: ${({theme}) => theme.font.weights[700]};
  height: 35px;
  justify-content: space-between;
  letter-spacing: 2px;
  padding: 0 1rem;
  text-transform: uppercase;

  > svg {
    transition: transform .4s;
    transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0deg)' };
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
  cursor: pointer;
  font-size: .8rem;
  padding: .625rem 1rem;
  position: relative;

  &:not(.active-filter):hover {
    background-color: #e7e7e775;
  }

  &.active-filter {
    background-color: #e7e7e7;
  }
`;

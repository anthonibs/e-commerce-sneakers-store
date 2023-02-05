import styled, { keyframes } from 'styled-components';

const fade = keyframes`
 from {
    opacity: .3;
    top: -4px;
  }
  to {
    opacity: 1;
  }
`;

const hiddenFilterOrder = keyframes`
  from {
    opacity: 100%;
    top: 0;
  }

  to {
    display: none;
    opacity: 0%;
    top: -4px;
    visibility: hidden;
  }
`;

export const Container = styled.fieldset`
  height: 35px;
  position: relative;
  width: 180px;
  z-index: 100;
`;

export const ButtonFilter = styled.button`
  height: 100%;
  text-align: left;
  width: 100%;
`;

interface ITitleFilter {
  open: boolean
}

export const TitleFilter = styled.span<ITitleFilter>`
  align-items: center;
  border-radius: .325rem;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  cursor: pointer;
  color:  ${({theme}) => theme.colors.neutral[500]};
  display: flex;
  font-size: .725rem;
  font-weight: ${({ theme }) => theme.font.weights[700]};
  font-family: ${({ theme }) => theme.font.family};
  height: 100%;
  justify-content: space-between;
  letter-spacing: 1px;
  overflow: hidden;
  padding: .625rem .825rem;
  text-transform: uppercase;
  width: 100%;

  > svg {
    transition: transform .4s;
    transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const ListOrderContainer = styled.ul`
  border-radius: .325rem;
  background-color:  ${({theme}) => theme.colors.neutral[500]};
  height: fit-content;
  max-height: 200px;
  overflow: auto;
  position: relative;
  padding-bottom: .325rem;
  top: .4rem;

  &.active-menu-order {
    animation: ${fade} .6s forwards;
  }

  &.disabled-menu-order {
    animation: ${hiddenFilterOrder} .3s forwards;
  }

  &::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 8px;
  }	

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary[200]};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const ListOrderItem = styled.li`
  cursor: pointer;
  font-size: .9rem;
  padding: .625rem 1rem;

  &:not(.active-filter):hover {
    background-color: #e7e7e775;
  }
  
  &.active-filter {
    background-color: #e7e7e7;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: .325rem;
  background-color: #EFEFEF;
  display: flex;
  overflow: hidden;  
  width: fit-content;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ButtonGrid = styled.button`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: .5rem;   
  transition: all 1s ease-in-out;

  &:hover {
    background-color: rgba(255, 115, 0, .25);
  }
  
  & > svg {
    fill: #444444;
    pointer-events: none;
  }

  &.selected {
    background-color: #FF7A1A;
  }
  
  &.selected > svg {
    fill: white;
  }
`;

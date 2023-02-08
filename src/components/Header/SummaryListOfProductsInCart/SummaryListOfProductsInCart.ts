import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
    position: relative;
    left: -10%;
  }
  50% {
    opacity: .3;
    left:0;
    position: relative;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
`;

export const TitleContainer = styled.div`
  @media (min-width: 375px) {
    border-bottom: 3px solid ${({ theme }) => theme.colors.neutral[700]};
    height: 50px;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    height: 60px;
  }

  @media (min-width: 1000px) {
    height: 80px;
    padding: 0 2rem;
  }
`;

export const Title = styled.h3`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[100]}; 
    font-size: .9rem;
    line-height: 50px;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 60px;
  }
  
  @media (min-width: 1000px) {
    line-height: 80px;
  }
`;

export const ListContainer = styled.ul`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 160px;
    margin: 0 1rem;
    overflow-x: auto;
    padding: 1rem 0;
    width: calc(100% - 1rem);

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
  }

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1000px) {
    width: calc(100% - 2rem);
    margin: 0 2rem;
    padding: 1.2rem 0;
    height: 220px;
  }
`;

export const ItemProduct = styled.li`
  @media (min-width: 375px) {
    animation: ${fade} 1s linear forwards;
    display: grid;
    gap: 1rem;
    grid-template-columns: 50px 1fr auto;
    grid-template-rows: 1fr;
    height: fit-content;
    padding-right: 1rem;
    width: 100%;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 80px 1fr auto;
  }
`;

export const ImageContainer = styled.figure`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  border-radius: .325rem;
  display: block;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;

export const Name = styled.p`
  @media (min-width: 375px) {
    font-size: .825rem;
    line-height: 1; 
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2; 
  }
`;

export const Description = styled.p`
   @media (min-width: 375px) {
    font-size: .825rem;
    line-height: 1; 
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.2; 
  }
`;

export const Delete = styled.button`
  align-self: center;
  background-color: transparent;
  cursor: pointer;
  height: fit-content;
  padding: .325rem;
  z-index: 100;

  &:hover svg use {
    fill: #68707D;
    transition: all .3s ease;
  }
`;

export const Message = styled.span`
  @media (min-width: 375px) {
    animation: ${fade} 1s linear forwards;
    color: ${({ theme }) => theme.colors.neutral[300]};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.weights[700]};;
    line-height: calc(170px - 2.675rem);
    margin-right: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-right: 2rem;
    line-height: calc(200px - 2rem);
  }
  
  @media (min-width: 1000px) {
    line-height: calc(220px - 2.375rem);
  }
`;

export const Button = styled.button`
  @media (min-width: 375px) {
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.colors.primary[100]};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral[500]};
    display: block;
    font-size: .9rem;
    font-weight:  ${({ theme }) => theme.font.weights[700]};
    height: 40px;
    margin: 0 auto;
    margin-top: 1rem;
    transition: background .6s ease;
    width: calc(100% - 1rem);
      
    &:disabled {
      background-color: ${({ theme }) => theme.colors.neutral[300]};
      cursor: auto;
      transition: background .6s ease;
    } 
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    height: 50px;
    width: calc(100% - 2rem);
  }

  @media (min-width: 1000px) {
    height: 60px; 
    margin-top: 1.6rem;
    width: calc(100% - 4rem);
  }
`;
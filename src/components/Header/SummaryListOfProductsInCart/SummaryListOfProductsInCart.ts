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

export const TitleContainer = styled.header`
  height: 80px;
  padding: 0 2rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.neutral[700]};
`;

export const Title = styled.h3`
  text-align: left;
  line-height: 80px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 2rem);
  margin: 0 2rem;
  padding: 1.2rem 0;
  height: 220px;
  overflow-x: auto;

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

export const ItemProduct = styled.li`
  display: grid;
  width: 100%;
  height: fit-content;
  gap: 1rem;
  padding-right: 1rem;
  grid-template-columns: 80px 1fr auto;
  grid-template-rows: 1fr;
  animation: ${fade} 1s linear forwards;
`;

export const ImageContainer = styled.figure`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  border-radius: 6px;
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
  font-size: 16px;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const Delete = styled.button`
  cursor: pointer;
  height: fit-content;
  padding: .325rem;
  align-self: center;
  z-index: 2000;
  background-color: transparent;

  &:hover svg use {
    fill: #68707D;
    transition: all .3s ease;
  }
`;

export const Message = styled.span`
  line-height: calc(220px - 2.375rem);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[300]};
  animation: ${fade} 1s linear forwards;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  width: calc(100% - 4rem);
  margin: 0 auto;
  margin-top: 1.6rem;
  height: 60px;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-weight:  ${({ theme }) => theme.font.weights[700]};
  background-color: ${({ theme }) => theme.colors.primary[100]};
  transition: background .6s ease;
    
  &:disabled {
    cursor: auto;
    transition: background .6s ease;
    background-color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;
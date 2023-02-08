import styled from 'styled-components';

export const Container = styled.section`
  @media (min-width: 375px) {
    height: 100%;
    margin: .6rem auto 0;
    width: 95%;
  }

  @media (min-width: 768px) {
    margin-top: 1.6rem;
    width: 100%;
  }
`;

export const Title = styled.h2`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: 1.3rem; 
    font-weight: ${({ theme }) => theme.font.weights[700]}; 
    line-height: 1.3;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem; 
  }

  @media (min-width: 1000px) {
    font-size: 2rem; 
  }
`;

export const RemoveAll = styled.button`
  @media (min-width: 375px) {
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary[100]}; 
    font-size: .825rem;
    padding: .325rem 0;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 2rem;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 375px) {
    margin-bottom: 3rem;
    width: 100%;

    > p {
      color: ${({theme}) => theme.colors.neutral[600]};
      font-size: .925rem;
      text-align: right;
    } 
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    width: 100%;

    > p {
      font-size: 1.6rem;
    } 
  }
`;

export const ResumeList = styled.ul`
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  border-top: 2px solid ${({ theme }) => theme.colors.neutral[400]};
  margin: .325rem 0;
`;

export const CardProduct = styled.li`
  @media (min-width: 375px) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[400]};
    display: grid;
    gap: 1rem;
    grid-template-columns: 80px 1fr 100px;
    grid-template-areas: 
    'image product price'
    ;
    height: auto;
    padding: .625rem 0; 
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: 140px 1fr 180px;
    padding: 2rem 0; 
  }

  @media (min-width: 1000px) {
    grid-template-columns: 180px 1fr 180px;
  }
`;

export const Image = styled.figure`
  height: 100%;
  grid-area: image;
  width: 100%;

  > img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  @media (min-width: 375px) {
    color: ${({ theme }) => theme.colors.primary[100]}; 
    font-size: .9rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Info = styled.div`
  grid-area: product;

  a {
    text-decoration: none;
  }

  @media (min-width: 375px) {

    > span {
      display: block;
      font-size: .7rem;
      font-weight: ${({ theme }) => theme.font.weights[700]};
      margin-top: .3rem;

      &.in-stock {
        color: #038C3E;
      }
    
      &.out-stock {
        color: #D92525;
      }
    } 
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: .6rem; 

    > span {
      font-size: .9rem;
      margin-top: .325rem;
    } 
  }
`;


export const ControlButton = styled.div`
 @media (min-width: 375px) {
    align-items: center;
    display: flex;
    margin-top: .625rem;
    width: 100%;
  }

 @media (min-width: 768px) {
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export const WrapperButton = styled.div`
  border-radius: .625rem;
  background-color: whitesmoke;
  display: flex;
  overflow: hidden;
  width: fit-content;
`;

export const ButtonShop = styled.button`
  @media (min-width: 375px) {
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center; 
    width: 35px;
  }

  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral[700]};
    cursor: default;
    transition: all .6s ease-in-out;
  }

  & svg {
    fill: ${({ theme }) => theme.colors.primary[100]};
    transition: all .5s ease-in-out;
  }

  &:hover svg   {
    fill: ${({ theme }) => theme.colors.primary[300]};
  }

  &:disabled svg {
    fill: ${({ theme }) => theme.colors.primary[300]};
  }
`;

export const QuantityProduct = styled.span`
  @media (min-width: 375px) {
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral[600]};
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.font.weights[700]}; 
    height: 30px;
    justify-content: center;
    width: 35px;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem; 
    height: 50px;
    width: 40px;
  }
`;

export const RemoveItem = styled.button`
  @media (min-width: 375px) {
    border-radius: .15rem;
    background-color: ${({ theme }) => theme.colors.primary[100]};
    cursor: pointer;
    color: ${({theme}) => theme.colors.neutral[500]}; 
    font-size: .7rem;
    font-weight: ${({theme}) => theme.font.weights[700]};
    margin-left: 2rem;
    padding: .425rem;
    width: fit-content;
  }

  @media (min-width: 768px) {
    font-size: .825rem;
    margin-left: 0rem;
    padding: .325rem 1rem;
  }
`;

export const Price = styled.div`
  @media (min-width: 375px) {
    color: ${({theme}) => theme.colors.neutral[600]}; 
    font-size: 1.2rem;
    grid-area: price;
    text-align: right;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-top: .6rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.825rem;
  }
`;

export const SubTotal = styled.span`
  @media (min-width: 375px) {
    display: block;
    font-size: .925rem;
    margin-top: .825rem; 
    text-align: right;
  }

  @media (min-width: 768px) {
    font-size: 1.825rem;
    margin-top: 1rem; 
  }
`;
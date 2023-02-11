import styled, { keyframes } from 'styled-components';

const lineMenu = keyframes`
  from {
    width: 0%;
  }
  
  to {
    width: 100%;
  }
`;

const fade = keyframes`
  from {
    top: 40px;
    opacity: .3;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header`
  @media (min-width: 375px) {
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    height: 70px;
    position: fixed;
    padding-bottom: .625rem;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  @media (min-width: 1000px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    border-bottom: 3px ${({ theme }) => theme.colors.neutral[700]} solid;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    width: 100%;
    z-index: 1000;
  }

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1000px) {
    max-width: 1400px;
    width: 80%;
  }
`;

export const LogoContainer = styled.figure`
  @media (min-width: 375px) { 
    margin-left: 4rem;
    position: relative;
    order: 2;
    z-index: 200;

    > a svg {
      pointer-events: none;
    }
  }

  @media (min-width: 768px) {
    margin-left: 6rem;
  }

  @media (min-width: 1000px) {
    margin-left: 0rem;
    order: 1;
  }
`;

export const ControlNavLink = styled.div`
  @media (min-width: 375px) {
    display: flex;
    height: 70px;
    order: 1;
    position: fixed;
    top: 0px;
  }

  @media (min-width: 1000px) {
    height: 100px;
    justify-content: flex-end;
    margin-left: 4rem;
    order: 2;
    position: relative;
    width: 100%;
  }
`;

export const ButtonMenuMobile = styled.button`
  @media (min-width: 375px) {
    background-color: transparent; 
    cursor: pointer;
    position: fixed;
    padding: .325rem;
    top: 22px;
    left: 40px;

    > svg {
      pointer-events: none;
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

interface IMenuMobile {
  openMenu: boolean;
}

export const Navbar = styled.nav<IMenuMobile>`
  @media (min-width: 375px) {
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 1rem;
    left: ${({ openMenu }) => openMenu ? '0%' : '-100%'};
    padding: 2rem 3rem;
    position: fixed;
    transition: all 1s;
    top: 70px;
    width: 250px;

    a {
      color: ${({ theme }) => theme.colors.neutral[300]};
      font-size: 1rem;
      font-weight: ${({theme}) => theme.font.weights[700]};
      line-height: 20px;
      position: relative;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.neutral[600]};
      }
    }

    .activePage {
      color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }

  @media (min-width: 1000px) {
    align-items: center;
    flex-direction: row;
    gap: 1.325rem;
    height: 100%;
    justify-content: flex-start;
    left: 0%;
    position: relative;
    padding: 0;
    top: 0px;
    width: 100%;

    .activePage {
      &::before {
        background-color: ${({ theme }) => theme.colors.neutral[200]};
        bottom: -.5rem;
        border-radius: 2px;
        content: "";
        display: flex;
        height: 3px;
        position: absolute;
        width: 100%;
      }
    }
  }
`;

export const Title = styled.span`
  @media (min-width: 1000px) {
    &:hover::before {
      animation: ${lineMenu} .3s ease-in forwards;
      bottom: -.5rem;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      content: "";
      display: flex;
      height: 3px;
      position: absolute;
    } 
  }
`;

export const ProfileContainer = styled.div`
  @media (min-width: 375px) {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    order: 3; 
    position: relative;
  }
  
  @media (min-width: 768px) {
    margin-right: 0;
    gap: 1.6rem;
  }
`;

export const ButtonContainerCart = styled.div<ISummaryCart>`
  &:hover {
    display:  ${({ cartHover }) => cartHover === true ? 'block' : 'none'};
}
`;

export const ImageContainer = styled.figure`
  border: 3px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  transition: border .5s ease-out;

  &:hover {
    border: 3px solid  ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const Image = styled.img`
  @media (min-width: 375px) {
    display: block;
    height: 40px; 
  }

  @media (min-width: 768px) {
    height: 50px; 
  }

  @media (min-width: 1000px) {
    height: 60px; 
  }
`;

interface IOpenCart {
  disabled: boolean;
}

export const ShoppingCart = styled.button<IOpenCart>`
  @media (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content:center;
    position: relative;
    background-color: transparent;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 25px;
    transition: background .3s ease-in-out;
  
    > svg path {
      opacity: ${({ disabled }) => disabled ? '.2' : '1'};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[400]};

      > svg path {
        fill:${({ theme }) => theme.colors.neutral[200]};
      }
    } 
  }
`;

export const QuantityOfProducts = styled.span<IOpenCart>`
  @media (min-width: 375px) {
    border: 2px solid ${({ theme }) => theme.colors.neutral[500]}; 
    background-color: ${({ theme }) => theme.colors.primary[100]};
    border-radius: 20px;
    color:  ${({ theme }) => theme.colors.neutral[500]};
    display: ${({ disabled }) => disabled ? 'none' : 'block'};
    font-size: .625rem;
    font-weight: ${({ theme }) => theme.font.weights[700]};
    height: 22px;
    line-height: 19px;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 22px;
  }

  @media (min-width: 768px) {
    font-size: .8725rem;
    height: 26px;
    line-height: 22px;
    width: 26px;
  }
`;

interface ISummaryCart {
  cartHover: boolean
}

export const ContainerSummary = styled.div<ISummaryCart>`
  @media (min-width: 375px) {
    animation: ${fade} .5s linear;
    box-shadow: rgba(149, 157, 165, .3) 0px 8px 24px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    display:  ${({ cartHover }) => cartHover === true ? 'block' : 'none'};
    padding-bottom: 1rem;
    position: fixed;
    overflow: hidden;
    right: 50%;
    top: 90px;
    transform: translate(50%);
    width: 90%;
  }

  @media (min-width: 768px) {
    position: absolute;
    padding-bottom: 1.25rem;
    right: 0px;
    top: 55px;
    transform: translate(0%);
    width: 400px;
  }

  @media (min-width: 1000px) {
    padding-bottom: 1.75rem;
    right: -60px;
    top: 68px;
    width: 460px;
  }
`;
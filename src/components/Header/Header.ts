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
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  width: 100%;
  height: 100px;
  z-index: 1000;
  box-sizing: content-box;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px ${({ theme }) => theme.colors.neutral[700]} solid;
`;

export const LogoContainer = styled.figure`
`;

export const ControlNavLink = styled.div`
  margin-left: 4rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    position: relative;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral[300]};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }

  .activePage {
    color: ${({ theme }) => theme.colors.neutral[200]};

    &::before {
      content: "";
      position: absolute;
      bottom: -.5rem;
      border-radius: 2px;
      display: flex;
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }

  }
`;

export const Title = styled.span`
  &:hover::before {
    content: "";
    position: absolute;
    bottom: -.5rem;
    border-radius: 2px;
    display: flex;
    animation: ${lineMenu} .3s ease-in forwards;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1.6rem;
`;

export const ButtonContainerCart = styled.div<ISummaryCart>`
  &:hover {
    display:  ${({ cartHover }) => cartHover === true ? 'block' : 'none'};
}
`;

export const ImageContainer = styled.figure`
  border: 3px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  transition: border .5s ease-out;

  &:hover {
    border: 3px solid  ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const Image = styled.img`
  display: block;
  height: 50px;
`;

interface IOpenCart {
  disabled: boolean;
}

export const ShoppingCart = styled.button<IOpenCart>`
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
`;

export const QuantityOfProducts = styled.span<IOpenCart>`
  display: ${({ disabled }) => disabled ? 'none' : 'block'};
  right: -8px;
  top: -8px;
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 20px;
  border-radius: 12px;
  color:  ${({ theme }) => theme.colors.neutral[500]};
  font-weight: ${({ theme }) => theme.font.weights[700]};
  background-color: ${({ theme }) => theme.colors.primary[100]};
  font-size: 11px;
  border: 2px solid ${({ theme }) => theme.colors.neutral[500]};
`;

interface ISummaryCart {
  cartHover: boolean
}

export const ContainerSummary = styled.div<ISummaryCart>`
  display:  ${({ cartHover }) => cartHover === true ? 'block' : 'none'};
  top: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  position: absolute;
  width: 420px;
  top: 60px;
  right: -90px;
  border-radius: 7px;
  box-shadow: rgba(149, 157, 165, .3) 0px 8px 24px;
  padding-bottom: 1.75rem;
  overflow: hidden;
  animation: ${fade} .5s linear;
`;
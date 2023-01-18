import styled, { keyframes } from 'styled-components';

const lineMenu = keyframes`
  from {
    width: 0%;
  }
  
  to {
    width: 100%;
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  width: 100%;
  height: 100px;

  > div {
    width: 80%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    background-color: ${({ theme }) => theme.colors.neutral[500]};
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px ${({ theme }) => theme.colors.neutral[300]} solid;


    .menu-container {
      margin-left: 4rem;
      display: flex;
      width: 100%;
      justify-content: space-between;

    .menu-navbar {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    a {
      position: relative;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.neutral[300]};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.neutral[200]};
      }

      span:hover::before {
        content: "";
        position: absolute;
        bottom: -.5rem;
        border-radius: 2px;
        display: flex;
        animation: ${lineMenu} .3s ease-in forwards;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.neutral[200]};
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

    .menu-profile {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    figure {
      img {
        display: block;
        height: 50px;
      }
     }
    }
  }
`;


interface IButtonCartMenuProps {
  disabled: boolean;
}

export const ButtonCartMenu = styled.button<IButtonCartMenuProps>`
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
  opacity: ${({disabled}) => disabled ? '.2' : '1'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[400]};

    svg path {
      fill:${({ theme }) => theme.colors.neutral[200]};
    }
  }

  .items-cart {
    display: ${({disabled}) => disabled ? 'none' : 'block'};
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
  }
`;
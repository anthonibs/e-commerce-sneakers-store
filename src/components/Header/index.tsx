import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCartContext } from 'shared/hooks/useCart';

import {
  BoxShadowModal,
  ButtonContainerCart,
  ButtonMenuMobile,
  Container,
  ContainerSummary,
  ControlNavLink,
  HeaderContainer,
  Image,
  ImageContainer,
  LogoContainer,
  Navbar,
  ProfileContainer,
  QuantityOfProducts,
  ShoppingCart,
  Title
} from './Header';


import SummaryListOfProductsInCart from './SummaryListOfProductsInCart';
import Logo from 'components/svgs/Logo';
import IconCart from 'components/svgs/IconCart';
import profileImg from 'assets/images/image-avatar.png';
import IconMenu from 'components/svgs/IconMenu';
import IconClose from 'components/svgs/IconClose';

const Header = () => {

  const navigate = useNavigate();
  const { quantity } = useCartContext();

  const [openMenuHamburger, setOpenMenuHamburger] = useState<boolean>(false);
  const [onCartHover, setOnCartHover] = useState<boolean>(false);

  function handlerNavigateToCart() {
    navigate('/cart');
  }

  function handlerEnterCartField() {
    setOnCartHover(true);
  }

  function handlerExitCartField() {
    setOnCartHover(false);
  }

  const isProductCart = quantity?.totalQuantity === undefined || quantity?.totalQuantity === 0 ? true : false;

  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Link to={'/'} arial-label='Back to home page'>
            <Logo />
          </Link>
        </LogoContainer>

        <ControlNavLink>
          <ButtonMenuMobile 
            aria-label='Open mobile menu'
            data-menu={openMenuHamburger}
            onClick={() => setOpenMenuHamburger(prevState => !prevState)}
          >
            {openMenuHamburger 
              ? <IconClose/> 
              : <IconMenu />}
          </ButtonMenuMobile>


          <Navbar 
            aria-label='Navigation menu'
            openMenu={openMenuHamburger}
            aria-hidden={!openMenuHamburger}
          > 
            <BoxShadowModal
              aria-hidden
              onClick={() => setOpenMenuHamburger(prevState => !prevState)}
              className={openMenuHamburger ? 'box-shadow' : 'box-shadow-out'} 
            />

            <NavLink
              to={'/collections'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <Title>Collections</Title>
            </NavLink>

            <NavLink
              to={'/men'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <Title>Men</Title>
            </NavLink>

            <NavLink
              to={'/women'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <Title>Women</Title>
            </NavLink>

            <NavLink
              to={'/about'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <Title>About</Title>
            </NavLink>

            <NavLink
              to={'/contact'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <Title>Contact</Title>
            </NavLink>
          </Navbar>
        </ControlNavLink>


        <ProfileContainer>        
          <ButtonContainerCart
            cartHover={onCartHover}
            onMouseEnter={handlerEnterCartField}
            onTouchMove={handlerEnterCartField}
          >
            <ShoppingCart
              tabIndex={0}
              aria-labelledby='cart-summary'  
              disabled={isProductCart}
              onClick={handlerNavigateToCart}
            >
              <IconCart />

              <QuantityOfProducts
                disabled={isProductCart}
                aria-label='Quantity of products in the cart'
              >
                {!isProductCart && quantity?.totalQuantity}
              </QuantityOfProducts>

            </ShoppingCart>
          </ButtonContainerCart>

          <ImageContainer tabIndex={0}>
            <Image src={profileImg} alt="Your profile picture" />
          </ImageContainer>

          <ContainerSummary
            id='cart-summary'
            cartHover={onCartHover}
            aria-hidden={!onCartHover}
            onMouseLeave={handlerExitCartField}
            onTouchMove={handlerExitCartField}
          >
            <SummaryListOfProductsInCart />
          </ContainerSummary>
        </ProfileContainer>
      </Container>
    </HeaderContainer >
  );
};

export default Header;
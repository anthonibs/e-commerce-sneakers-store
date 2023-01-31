import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCartContext } from 'shared/hooks/useCart';

import {
  ButtonContainerCart,
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

const Header = () => {

  const navigate = useNavigate();
  const { quantity } = useCartContext();

  const [onCartHover, setOnCartHover] = useState<boolean>(false);

  function handlerNavigateToCart() {
    navigate('/cart');
  }


  const isProductCart = quantity?.totalQuantity === undefined || quantity?.totalQuantity === 0 ? true : false;

  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Link to={'/'}>
            <Logo />
          </Link>
        </LogoContainer>

        <ControlNavLink>
          <Navbar>
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

          <ProfileContainer>
            <ButtonContainerCart
              cartHover={onCartHover}
              onMouseEnter={() => setOnCartHover(true)}
            >
              <ShoppingCart
                onClick={handlerNavigateToCart}
                disabled={isProductCart}
              >
                <IconCart />
                <QuantityOfProducts
                  disabled={isProductCart}
                >
                  {!isProductCart && quantity?.totalQuantity}
                </QuantityOfProducts>
              </ShoppingCart>
            </ButtonContainerCart>

            <ImageContainer>
              <Image src={profileImg} alt="Sneakers Store Logo" />
            </ImageContainer>

            <ContainerSummary
              cartHover={onCartHover}
              onMouseLeave={() => setOnCartHover(false)}
            >
              <SummaryListOfProductsInCart />
            </ContainerSummary>
          </ProfileContainer>
        </ControlNavLink>
      </Container>
    </HeaderContainer >
  );
};

export default Header;
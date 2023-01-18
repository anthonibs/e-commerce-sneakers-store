import { Link, NavLink, useNavigate } from 'react-router-dom';

import { ButtonCartMenu, HeaderContainer } from './Header';


import Logo from 'components/svgs/Logo';
import IconCart from 'components/svgs/IconCart';
import profileImg from 'assets/images/image-avatar.png';

const Header = () => {

  const navigate = useNavigate();

  function handlerNavigateToCart() {
    navigate('/cart');
  }

  return (
    <HeaderContainer>
      <div>
        <figure className='logo-link'>
          <Link to={'/'}>
            <Logo />
          </Link>
        </figure>

        <div className='menu-container'>
          <nav className='menu-navbar'>
            <NavLink
              to={'/collections'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <span>Collections</span>
            </NavLink>

            <NavLink
              to={'/men'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <span>Men</span>
            </NavLink>

            <NavLink
              to={'/women'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <span>Women</span>
            </NavLink>

            <NavLink
              to={'/about'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <span>About</span>
            </NavLink>

            <NavLink
              to={'/contact'}
              className={({ isActive }) => isActive ? 'activePage' : ''}
            >
              <span>Contact</span>
            </NavLink>
          </nav>

          <div className='menu-profile'>
            <ButtonCartMenu
              onClick={handlerNavigateToCart}
              disabled={true}
            >
              <IconCart />
              <span className='items-cart'>
                7
              </span>
            </ButtonCartMenu>

            <figure>
              <img src={profileImg} alt="Sneakers Store Logo" />
            </figure>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
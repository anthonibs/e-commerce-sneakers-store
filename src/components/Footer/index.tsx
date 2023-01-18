import { Link } from 'react-router-dom';

import { FooterContainer } from './Footer';

import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <FooterContainer>
      <div className='container'>
        <div className='footer-group'>
          <h3>Help</h3>
          <ul>
            <li>
              <Link to="#">About Sneaker Company</Link>
            </li>
            <li>
              <Link to="#">Deadline</Link>
            </li>
            <li>
              <Link to="#">Exchanges and Returns</Link>
            </li>
            <li>
              <Link to="#">Shipping Conditions</Link>
            </li>
            <li>
              <Link to="#">Work With Us</Link>
            </li>
          </ul>
        </div>

        <div className='footer-group'>
          <h3>My account</h3>
          <ul>
            <li>
              <Link to="#">My ordered</Link>
            </li>
            <li>
              <Link to="#">Login</Link>
            </li>
          </ul>
        </div>

        <div className='footer-group'>
          <h3>Social networks</h3>

          <div>
            <Link to={'#'}>
              <AiFillFacebook />
            </Link>
            <Link to={'#'}>
              <AiFillInstagram />
            </Link>
            <Link to={'#'}>
              <AiFillTwitterSquare />
            </Link>
            <Link to={'#'}>
              <AiFillYoutube />
            </Link>
          </div>

          <address>
            <p>sac@sneakers.email.com</p>
          </address>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
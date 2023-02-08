import { Link } from 'react-router-dom';

import {
  Address,
  AddressTitle,
  Container,
  FooterContainer,
  GroupLink,
  ListItem,
  ListItems,
  SocialNetwork,
  Title
} from './Footer';

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube
} from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <GroupLink>
          <Title>Help</Title>
          <ListItems>
            <ListItem>
              <Link to="#">About Sneaker Company</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Deadline</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Exchanges and Returns</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Shipping Conditions</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Work With Us</Link>
            </ListItem>
          </ListItems>
        </GroupLink>

        <GroupLink>
          <Title>My account</Title>
          <ListItems>
            <ListItem>
              <Link to="#">My ordered</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Login</Link>
            </ListItem>
          </ListItems>
        </GroupLink>

        <GroupLink>
          <Title>Social networks</Title>
          
          <SocialNetwork>
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
          </SocialNetwork>

          <Address>
            <AddressTitle>sac@sneakers.email.com</AddressTitle>
          </Address>
        </GroupLink>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
import { useNavigate } from 'react-router-dom';
import { useCartContext } from 'shared/hooks/useCart';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import priceFormatted from 'shared/utils/priceFormatted';

import {
  Button,
  Container,
  Delete,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  ItemProduct,
  ListContainer,
  Message,
  Name,
  Title,
  TitleContainer
} from './SummaryListOfProductsInCart';

import IconDelete from 'components/svgs/IconDelete';

const SummaryListOfProductsInCart = () => {
  const { listCart, handlerRemoveProductCart } = useCartContext();
  const navigate = useNavigate();

  function handleShopCart() {
    navigate('/cart');
  }

  const isProductInsideCart = listCart.length > 0;

  return (
    <Container>
      <TitleContainer>
        <Title>Cart</Title>
      </TitleContainer>

      <ListContainer>
        {isProductInsideCart ?
          listCart.map((item: IProduct) => (
            <ItemProduct key={item.id}>
              <ImageContainer>
                <Image src={`/assets/products-shoes/${item.thumbnail}.webp`} alt="Imagem 1" />
              </ImageContainer>

              <InfoContainer>
                <Name>
                  {item.title}
                </Name>
                <Description>
                  {priceFormatted(item.priceCurrent)} x{item.quantity} <strong>{priceFormatted(item.priceCurrent * item.quantity)}</strong>
                </Description>
              </InfoContainer>

              <Delete
                onClick={() => handlerRemoveProductCart(item.id)}
              >
                <IconDelete />
              </Delete>
            </ItemProduct>
          ))
          :
          <Message>Your cart is empty.</Message>
        }
      </ListContainer>

      <Button
        onClick={handleShopCart}
        disabled={!isProductInsideCart}>
        Checkout
      </Button>
    </Container>
  );
};

export default SummaryListOfProductsInCart;
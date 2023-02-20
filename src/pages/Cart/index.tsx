
import { Link } from 'react-router-dom';

import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi';

import { useCartContext } from 'shared/context/useCart';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import priceFormatted from 'shared/utils/priceFormatted';

import {
  ButtonShop,
  CardProduct,
  Container,
  ControlButton,
  Image,
  Info,
  Price,
  QuantityProduct,
  RemoveAll,
  RemoveItem,
  ResumeList,
  SubTitle,
  SubTotal,
  Title,
  Wrapper,
  WrapperButton
} from './Cart';

const Cart = () => {

  const { listCart, handleMinusCart, handlePlusCart, handlerRemoveProductCart, quantity, handlerRemoveAll } = useCartContext();
  const productAddToCart = (id: string) => listCart.find((product: IProduct) => product.id === id);

  return (
    <Container>
      {listCart.length > 0
        ? <>
          <Title>
            Shopping cart
          </Title>

          <RemoveAll
            onClick={handlerRemoveAll}
          >
            Remove all items
          </RemoveAll>
        </> :

        <Title>
          Your Sneakers shopping cart is empty.
        </Title>
      }


      <Wrapper>
        <h2>Price</h2>
        <ResumeList>
          {listCart.map((item: IProduct) => (
            <CardProduct
              key={item.id}
              tabIndex={0}
            >
              <Image>
                <img src={`/assets/products-shoes/${item.thumbnail}.webp`} alt={item.title} />
              </Image>

              <Info>
                <Link to={`/men/${item.id}`}>
                  <SubTitle>
                    {item.title}
                  </SubTitle>
                </Link>

                {item.stock >= item.quantity
                  ? <span className='in-stock'>Em estoque</span>
                  : <span className='out-stock'>Sem estoque</span>
                }

                <ControlButton>
                  <WrapperButton>
                    <ButtonShop
                      onClick={() => handleMinusCart(item.id)}
                      arial-label='Decrease product'
                    >
                      <HiMinus />
                    </ButtonShop>
                    <QuantityProduct>
                      <input
                        type="text"
                        readOnly
                        value={productAddToCart(item.id)?.quantity || 0}
                      />
                    </QuantityProduct>
                    <ButtonShop
                      onClick={() => handlePlusCart(item)}
                      aria-label='Add product'
                    >
                      <HiPlus />
                    </ButtonShop>
                  </WrapperButton>

                  <RemoveItem
                    onClick={() => handlerRemoveProductCart(item.id)}
                    aria-label='Remover item'
                  >
                    <HiTrash size={18} />
                    <span aria-hidden={true}>Remove item</span>
                  </RemoveItem>
                </ControlButton>
              </Info>


              <Price>
                {priceFormatted(item.priceCurrent)}
              </Price>
            </CardProduct>
          ))}
        </ResumeList>

        <SubTotal tabIndex={0}>
          Subtotal ({quantity.totalQuantity} items): <strong>{priceFormatted(quantity.totalValue)}</strong>
        </SubTotal>
      </Wrapper>
    </Container>
  );
};

export default Cart;
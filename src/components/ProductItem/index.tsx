import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProductService from 'server/ProductService';

import { useCartContext } from 'shared/hooks/useCart';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import priceFormatted from 'shared/utils/priceFormatted';

import {
  AddProductCart,
  ButtonCart,
  Company,
  Container,
  ContainerInfo,
  ControlButtonCart,
  CurrentPrice,
  DescriptionWrap,
  PreviousPrice,
  PriceWrap,
  ProductDiscount,
  ProductName,
  QuantityProduct,
  TextDescription,
  TitleContainer,
  Wrapper,
  WrapperButton
} from './ProductItem';

import SliderProduct from 'components/SliderProduct';
import IconCart from 'components/svgs/IconCart';
import IconMinus from 'components/svgs/IconMinus';
import IconPlus from 'components/svgs/IconPlus';


type IParams = {
  orderID: string
}

const ProductItem = () => {

  // States
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  // Hooks
  const { orderID } = useParams() as IParams;
  const navigate = useNavigate();

  // Hooks Custom
  const { listCart, handleMinusCart, handlePlusCart } = useCartContext();

  const loadProduct = useCallback(async () => {
    try {
      const productItem = await ProductService.listProduct(orderID);
      setProduct({ ...productItem[0] });

    } catch (error) {
      console.log(error);
    }
  }, [orderID]);

  const {
    title,
    id,
    description,
    discountPercentage,
    images,
    price,
    stock,
    thumbnail
  } = product;

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  function handleAddCart() {
    navigate('/cart');
  }

  const productAddToCart = listCart.find((product: IProduct) => product.id === id);
  const quantityLessThanZero = (productAddToCart?.quantity === undefined && -1 <= 0);
  const quantityGreaterThanStock = (productAddToCart?.quantity >= stock);


  return (
    <Container>
      <Wrapper>
        <SliderProduct
          thumbnail={thumbnail}
          slider={images}
          title={title}
        />

        <ContainerInfo>
          <TitleContainer>
            <Company>sneaker company</Company>
            <ProductName>{title}</ProductName>
          </TitleContainer>

          <DescriptionWrap>
            <TextDescription>
              {description}
            </TextDescription>

            <PriceWrap>
              <CurrentPrice>
                {priceFormatted(price * (1 - (discountPercentage === null ? 0 : discountPercentage / 100)))}
              </CurrentPrice>
              {discountPercentage !== null
                &&
                <ProductDiscount>
                  {discountPercentage}%
                </ProductDiscount>
              }
            </PriceWrap>
            {discountPercentage !== null
              &&
              <PreviousPrice>
                {priceFormatted(price)}
              </PreviousPrice>
            }
          </DescriptionWrap>

          <WrapperButton>
            <ControlButtonCart>
              <ButtonCart
                onClick={() => handleMinusCart(id)}
                disabled={quantityLessThanZero}
              >
                <IconMinus />
              </ButtonCart>

              <QuantityProduct>
                {productAddToCart?.quantity || 0}
              </QuantityProduct>

              <ButtonCart
                onClick={() => handlePlusCart(product)}
                disabled={quantityGreaterThanStock}
              >
                <IconPlus />
              </ButtonCart>
            </ControlButtonCart>

            <AddProductCart
              onClick={handleAddCart}
            >
              <IconCart />
              Add to cart
            </AddProductCart>
          </WrapperButton>
        </ContainerInfo>
      </Wrapper>
    </Container >
  );
};

export default ProductItem;
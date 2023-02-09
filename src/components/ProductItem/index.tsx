import { memo, useCallback, useEffect, useState } from 'react';
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
  Article,
  WrapperButton
} from './ProductItem';

import { HiMinus, HiPlus } from 'react-icons/hi';

import SliderProduct from 'components/SliderProduct';
import IconCart from 'components/svgs/IconCart';
import NotFound from 'pages/NotFound';
import Spinner from 'components/Spinner';


type IParams = {
  orderID: string
}

const ProductItem = () => {

  // States
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [productNoExist, setProductNoExist] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Hooks
  const { orderID } = useParams() as IParams;
  const navigate = useNavigate();

  // Hooks Custom
  const { listCart, handleMinusCart, handlePlusCart } = useCartContext();

  const loadProduct = useCallback(async () => {
    try {
      const productItem = await ProductService.listProduct(orderID);

      if (productItem.length > 0) {
        setProduct({ ...productItem[0] });
      }
      
      if (productItem.length === 0) {
        return setProductNoExist(true);
      }
      
      setLoading(true);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  if (productNoExist) {
    return <NotFound />;
  }

  function handleAddCart() {
    navigate('/cart');
  }

  const productAddToCart = listCart.find((product: IProduct) => product.id === id);
  const quantityLessThanZero = (productAddToCart?.quantity === undefined && -1 <= 0);
  const quantityGreaterThanStock = (productAddToCart?.quantity >= stock);


  return (
    <Container>
      {loading && <Spinner/>}
      {
        !loading 
        && <Article>
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
                <div>
                  <CurrentPrice>
                    {priceFormatted(price * (1 - (discountPercentage === null ? 0 : discountPercentage / 100)))}
                  </CurrentPrice>

                  {discountPercentage !== null
                  &&
                  <ProductDiscount>
                    {discountPercentage}%
                  </ProductDiscount>
                  }
                </div>

                <div>
                  {discountPercentage !== null
                  &&
                  <PreviousPrice>
                    {priceFormatted(price)}
                  </PreviousPrice>
                  }</div>
              </PriceWrap>

            </DescriptionWrap>

            <WrapperButton>
              <ControlButtonCart>
                <ButtonCart
                  onClick={() => handleMinusCart(id)}
                  disabled={quantityLessThanZero}
                >
                  <HiMinus />
                </ButtonCart>

                <QuantityProduct>
                  {productAddToCart?.quantity || 0}
                </QuantityProduct>

                <ButtonCart
                  onClick={() => handlePlusCart(product)}
                  disabled={quantityGreaterThanStock}
                >
                  <HiPlus />
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
        </Article>
      }
    </Container >
  );
};

export default memo(ProductItem);
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductService from 'server/ProductService';

import { IProduct } from 'shared/interfaces/ProductsInterfaces';

import { Container } from './ProductItem';
import priceFormatted from 'utils/priceFormatted';
import IconCart from 'components/svgs/IconCart';
import IconMinus from 'components/svgs/IconMinus';
import IconPlus from 'components/svgs/IconPlus';
import { useCartContext } from 'shared/hooks/useCart';

type IParams = {
  orderID: string
}

const ProductItem = () => {

  // States
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  // Hooks
  const { orderID } = useParams() as IParams;

  // Hooks Custom
  const { listCart, handleMinusCart, handlePlusCart, handleAddCart } = useCartContext();


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


  const productAddToCart = listCart.find((product: IProduct) => product.id === id);
  const quantityLessThanZero = (productAddToCart?.quantity === undefined && -1 <= 0);
  const quantityGreaterThanStock = (productAddToCart?.quantity >= stock);


  return (
    <Container>
      <article>
        <figure>
          <img
            src={`/assets/products-shoes/${thumbnail}.webp`}
            alt={title} />
        </figure>

        <div>
          <header>
            <span>sneaker company</span>
            <h2>{title}</h2>
          </header>

          <div className='description-wrap'>
            <p>{description}</p>

            <div className='current-price'>
              <span className='price'>
                {priceFormatted(price * (1 - (discountPercentage === null ? 0 : discountPercentage / 100)))}
              </span>
              {discountPercentage !== null
                &&
                <span className='discount'>
                  {discountPercentage}%
                </span>
              }
            </div>
            {discountPercentage !== null
              &&
              <span className='previous-price'>
                {priceFormatted(price)}
              </span>
            }
          </div>

          <div className='wrapper-button'>
            <div className='control-button-cart'>
              <button
                className='minus'
                onClick={() => handleMinusCart(id)}
                disabled={quantityLessThanZero}>
                <IconMinus />
              </button>

              <span className='quantity'>
                {productAddToCart?.quantity || 0}
              </span>

              <button
                className='plus'
                onClick={() => handlePlusCart(product)}
                disabled={quantityGreaterThanStock}>
                <IconPlus />
              </button>
            </div>

            <button className='button-add-cart' onClick={handleAddCart}>
              <IconCart />
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </Container >
  );
};

export default ProductItem;
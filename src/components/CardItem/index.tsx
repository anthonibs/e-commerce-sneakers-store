import { memo } from 'react';

import { IProduct } from 'shared/interfaces/ProductsInterfaces';

import { CardContainer } from './CardItem';
import StarRating from 'components/StarRating';

import priceFormatted from 'utils/priceFormatted';
import percentageFormatted from 'utils/percentageFormatted';

import { BsCreditCard } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const CardItem = ({
  title,
  price,
  id,
  thumbnail,
  discountPercentage,
  rating
}: IProduct) => {

  const numberOfInstallments = 10;
  const isNullPercentage = discountPercentage === null ? 0 : discountPercentage;
  const priceAfterDiscount = price * (1 - (isNullPercentage / 100));


  return (
    <CardContainer tabIndex={0} data-card={'Cartão de produtos'}>
      <figure>
        {discountPercentage !== null
          &&
          <div>
            <span> -{percentageFormatted(discountPercentage)}</span>
          </div>
        }
        <Link to={`men/${Number(id)}`}>
          <img src={`/assets/products-shoes/${thumbnail}.webp`} alt={title} />
        </Link>
      </figure>

      <header>
        <h2>{title}</h2>
      </header>

      <section>
        <span className='star-rating'>
          <StarRating rating={rating} />
        </span>

        <p className='free-shipping'>Free Shipping</p>

        {discountPercentage !== null
          &&
          <span className='priceOf'>
            of {priceFormatted(price)}
          </span>
        }

        <span className='current-price'>
          {priceFormatted(priceAfterDiscount)}
        </span>

        <p className='value-installments'>
          <BsCreditCard />
          or until 10x of {priceFormatted(priceAfterDiscount / numberOfInstallments)}
        </p>
      </section>
    </CardContainer >
  );
};

export default memo(CardItem);

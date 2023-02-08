import { memo } from 'react';

import { IProduct } from 'shared/interfaces/ProductsInterfaces';

import { CardContainer, ContainerPercentage, ControlInfo, ControlStarRating, CurrentPrice, FigureContainer, FreeShipping, HeaderContainer, HeaderTitle, Image, Percentage, PriceOf, ValueInstallments } from './CardItem';
import StarRating from 'components/StarRating';

import priceFormatted from 'shared/utils/priceFormatted';
import percentageFormatted from 'shared/utils/percentageFormatted';

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
      <FigureContainer>
        {discountPercentage !== null
          &&
          <ContainerPercentage>
            <Percentage> 
              -{percentageFormatted(discountPercentage)}
            </Percentage>
          </ContainerPercentage>
        }
        <Link to={`/men/${Number(id)}`}>
          <Image
            src={`/assets/products-shoes/${thumbnail}.webp`}
            alt={title}
          />
        </Link>
      </FigureContainer>

      <HeaderContainer>
        <HeaderTitle>
          {title}
        </HeaderTitle>
      </HeaderContainer>

      <ControlInfo>
        <ControlStarRating>
          <StarRating rating={rating} />
        </ControlStarRating>

        <FreeShipping>
          Free Shipping
        </FreeShipping>

        {discountPercentage !== null
          &&
          <PriceOf className='priceOf'>
            of {priceFormatted(price)}
          </PriceOf>
        }

        <CurrentPrice className='current-price'>
          {priceFormatted(priceAfterDiscount)}
        </CurrentPrice>

        <ValueInstallments>
          <BsCreditCard />
          or until 10x of {priceFormatted(priceAfterDiscount / numberOfInstallments)}
        </ValueInstallments>
      </ControlInfo>
    </CardContainer >
  );
};

export default memo(CardItem);

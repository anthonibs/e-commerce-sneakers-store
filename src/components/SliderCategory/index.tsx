import { ICategories } from 'shared/interfaces/CategoryInterfaces';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';

import SliderSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Card, Container } from './SliderCategory';

import CardItem from 'components/CardItem';
import { memo, useCallback, useEffect, useState } from 'react';

interface ISliderCategory {
  card: ICategories;
  products: IProduct[];
}

interface IScreenWidth {
  slider: number;
  sliderScroll: number;
}

const SliderCategory = ({ card, products }: ISliderCategory) => {
  
  const [screenWidth, setScreenWidth] = useState<IScreenWidth>({
    slider: 3,
    sliderScroll: 2
  });


  function handleFilterCategoryIDAndID(item: number) {
    return products.filter(product => product.category_id === item);
  }

  
  const viewScreen = window.innerWidth;

  const handleViewScreen = useCallback(() => {
    if (viewScreen < 500 ) setScreenWidth({ slider: 1, sliderScroll: 1 });
    if (viewScreen > 500 && 768 > viewScreen) setScreenWidth({ slider: 2, sliderScroll: 1 });
    if (viewScreen < 1000 && 768 <= viewScreen) setScreenWidth({ slider: 3, sliderScroll: 2 });
    if (viewScreen < 1400 && 1000 <= viewScreen) setScreenWidth({ slider: 3, sliderScroll: 2 });
    if (viewScreen >= 1400) setScreenWidth({ slider: 4, sliderScroll: 3 });
  }, [viewScreen]);


  useEffect(() => {
    handleViewScreen();
  }, [handleViewScreen]);


  return (
    <Container>
      <SliderSlick
        infinite={true}
        speed={1000}
        slidesToShow={screenWidth.slider}
        slidesToScroll={screenWidth.sliderScroll}
        touchMove
      >
        {handleFilterCategoryIDAndID(card.id).map(product =>
          <Card
            key={product.id}
          >
            <CardItem
              product={product}
            />
          </Card>
        )}
      </SliderSlick>
    </Container>
  );
};

export default memo(SliderCategory);
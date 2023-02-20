import { useCallback, useEffect, useMemo, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

import { CategoryContainer, Container, Title } from './Home';

import BannerMain from 'components/BannerMain';

import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import ProductsService from 'server/ProductsService';

import { ICategories } from 'shared/interfaces/CategoryInterfaces';
import CategoriesService from 'server/CategoriesService';
import SliderCategory from 'components/SliderCategory';


const Home = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadAPIData = useCallback(async () => {
    try {
      const listProducts = await ProductsService.listProducts();
      const listCategories = await CategoriesService.listCategories();
     
      setProducts(listProducts);
      setCategories(listCategories);
      setLoading(true);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    loadAPIData();
  }, [loadAPIData]);


  // Banner list array
  const images = [
    {
      image: 'assets/banners/runnig-shoes-new-release-brand.png',
      link: '',
      title: 'Runnig Shoes New Release Brand',
    },
    {
      image: 'assets/banners/challenge-5km-sneakers.png',
      link: '',
      title: 'Challenge 5km sneakers',
    },
    {
      image: 'assets/banners/ready-for-sport.png',
      link: 'men/1',
      title: 'Ready for Sport',
    },
  ];


  // Sort three categories every time the page is loaded
  const sortCategories = useMemo(() => {
    return categories.sort(() => 0.5 - Math.random()).splice(0, 3);
  }, [categories]);


  return (
    <Container>
      {!loading
        &&
        <>
          <Carousel
            autoPlay={true}
            stopAutoPlayOnHover={true}
            duration={1000}
            interval={4000}
            indicators={true}
            animation={'fade'}
            indicatorIconButtonProps={{
              style: {
                color: '#B6BCC8',
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                padding: '1px',
                color: '#FF7A1A',
                backgroundColor: '#FFEDE0',
              }
            }}
            indicatorContainerProps={{
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                width: '100%',
                left: '40px',
                position: 'absolute',
                zIndex: 9999,
                bottom: '10px',
              }
            }}
            swipe={false}
          >
            {images.map((item, index) =>
              <BannerMain
                key={index}
                url={item.image}
                link={item.link}
                title={item.title}
                height="100%"
                width='100%'
                objectFit='fill'
              />)}
          </Carousel>

          {sortCategories.map(item =>
            <CategoryContainer key={item.id}>
              <Title>
                {item.category}
              </Title>

              <SliderCategory
                card={item}
                products={products}
              />
            </CategoryContainer>
          )}
        </>
      }
    </Container >
  );
};

export default Home;
import { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Container, ListContainer, ListItem } from './Home';

import BannerMain from 'components/BannerMain';
import CardItem from 'components/CardItem';

import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import ProductsService from 'server/ProductsService';
import Spinner from 'components/Spinner';



const Home = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const loadProducts = useCallback(async () => {
    try {
      const productsList = await ProductsService.listProducts();
      setProducts(productsList);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    loadProducts();
  }, [loadProducts]);


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

  return (
    <Container>
      {loading && <Spinner />}
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

          <ListContainer>
            {products.map((product: IProduct) => (
              <ListItem key={product.id}>
                <CardItem
                  key={product.id}
                  product={product}
                />
              </ListItem>
            ))}
          </ListContainer>
        </>
      }
    </Container >
  );
};

export default Home;
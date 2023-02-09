import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  AsideContainerFilter,
  Container,
  ControlFilter,
  HeaderFilter,
  LabelFilter,
  ListContainer,
  ListItem,
  ShowingResults
} from './Men';

import BannerMain from 'components/BannerMain';
import CardItem from 'components/CardItem';
import Filter from 'components/Filter';

import ProductsService from 'server/ProductsService';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import AsideFilter from 'components/AsideFilter';
import Spinner from 'components/Spinner';

const orderItems = ['Relevance', 'Biggest price', 'Lowest price'];

const Men = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [sortFilter, setSortFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);


  // Example of filter
  const [example, setExample] = useState('');
  const exampleTeste = ['Example 1', 'Example 2', 'Example 3', 'Example 4'];

  const loaderProducts = useCallback(async () => {
    try {
      const response = await ProductsService.listProducts();
      setProducts(response);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);


  function handleFilterOrder(newList: IProduct[]) {
    switch (sortFilter) {
    case 'biggest price':
      return newList.sort((a, b) => a.price < b.price ? 1 : -1);
    case 'lowest price':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    case 'relevance':
      return newList.sort((a, b) => a.rating > b.rating ? -1 : 1);
    case 'filter by order':
      return newList.sort((a, b) => a.id > b.id ? 1 : -1);
    default:
      return newList;
    }
  }

  const filterByBrand = useMemo(() => {
    return products.filter(item => selectedBrand === '' || item.brand.toLowerCase() === selectedBrand);
  }, [selectedBrand, products]);

  const newProductList = handleFilterOrder(filterByBrand);
  const brandsShoes = [...new Set(products.map(item => item.brand))];


  useEffect(() => {
    loaderProducts();
  }, [loaderProducts]);

  return (
    <>
      {loading && <Spinner />}
      {!loading &&
        <>
          <BannerMain
            height='260px'
            width='100%'
            objectFit='cover'
            url='assets/banners/sneakers-and-essential.png'
            title='Mens shoes'
          />

          <Container>
            <HeaderFilter>
              <ShowingResults>
                Showing: <strong>{newProductList.length}</strong> results
              </ShowingResults>

              <ControlFilter>
                <LabelFilter>
                  Order by
                </LabelFilter>

                <Filter
                  filterDefault="Filter by order"
                  options={orderItems}
                  selected={sortFilter}
                  setSelected={setSortFilter}
                />
              </ControlFilter>
            </HeaderFilter>

            <AsideContainerFilter>
              <AsideFilter
                title='Brands'
                options={brandsShoes}
                selected={selectedBrand}
                setSelected={setSelectedBrand}
              />
              <AsideFilter
                title='Example'
                options={exampleTeste}
                selected={example}
                setSelected={setExample}
              />
            </AsideContainerFilter>

            <ListContainer>
              {newProductList.map((product: IProduct) => (
                <ListItem key={product.id}>
                  <CardItem key={product.id} {...product} />
                </ListItem>
              ))}
            </ListContainer>
          </Container>
        </>
      }
    </>

  );
};

export default Men;
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  AsideContainerFilter,
  ButtonModalFilter,
  Container,
  ContainerFilter,
  ControlFilter,
  Header,
  LabelFilter,
  ListContainer,
  ListItem,
  PageSummary,
  SectionProducts,
  ShowingResults
} from './Men';

import BannerMain from 'components/BannerMain';
import CardItem from 'components/CardItem';
import Filter from 'components/Filter';

import ProductsService from 'server/ProductsService';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';
import AsideFilter from 'components/AsideFilter';
import Spinner from 'components/Spinner';
import ButtonGridMobile from 'components/ButtonGridMobile';

import { BiFilterAlt } from 'react-icons/bi';
import FilterModal from 'components/FilterModal';

const orderItems = ['Relevance', 'Biggest price', 'Lowest price'];

const Men = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [sortFilter, setSortFilter] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(true);

  const [selected, setSelected] = useState<string>('default');

  const [modalFilter, setModalFilter] = useState<boolean>(false);



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


  function handleModalFilter() {
    setModalFilter(true);
  }


  const filterByBrand = useMemo(() => {
    return products.filter(item => selectedBrand === '' || item.brand.toLowerCase() === selectedBrand);
  }, [selectedBrand, products]);

  const newProductList = handleFilterOrder(filterByBrand);
  const brandsShoes = [...new Set(products.map(item => item.brand))];

  const innerWidth = window.innerWidth;


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
            {innerWidth > 1000 && <AsideContainerFilter>
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
            </AsideContainerFilter>}


            <SectionProducts>
              <Header>
                <PageSummary>
                  <h2>
                    MEN&apos;S TENNIS
                  </h2>
                  <p>
                    Sneakers bets on current collections, always keeping an eye on the market, bringing technologies that offer comfort and safety when walking. And to provide the best for your feet, you will find models with extra soft finishes, lightness, flexibility, stability when walking and smart measurements. Every detail thought to offer shoes with the quality you deserve.
                  </p>

                  <p>
                    Now you can be represented with models for all occasions: day to day, walking, work, school, gym, performance or running.
                  </p>
                </PageSummary>

                <ContainerFilter>
                  <ShowingResults>
                    Showing: <strong>{newProductList.length}</strong> results
                  </ShowingResults>

                  <ControlFilter>
                    {innerWidth < 1000 && <>
                      <ButtonGridMobile
                        selected={selected}
                        setSelected={setSelected}
                      />

                      <FilterModal
                        modalFilter={modalFilter}
                        setModalFilter={setModalFilter}
                      >
                        <AsideFilter
                          title='Filter by order'
                          options={orderItems}
                          selected={sortFilter}
                          setSelected={setSortFilter}
                        />
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
                        <AsideFilter
                          title='Example 2'
                          options={exampleTeste}
                          selected={example}
                          setSelected={setExample}
                        />
                      </FilterModal>


                      <ButtonModalFilter
                        onClick={handleModalFilter}
                      >
                        <BiFilterAlt size={18} />
                        Filters
                      </ButtonModalFilter>
                    </>
                    }

                    {innerWidth > 1000
                      && <>
                        <LabelFilter>
                          Order by
                        </LabelFilter>

                        <Filter
                          filterDefault="Filter by order"
                          options={orderItems}
                          selected={sortFilter}
                          setSelected={setSortFilter}
                        />
                      </>
                    }
                  </ControlFilter>
                </ContainerFilter>
              </Header>

              <ListContainer
                className={selected}
                data-version={selected}
              >
                {newProductList.map((product: IProduct) => (
                  <ListItem key={product.id}>
                    <CardItem
                      key={product.id}
                      product={product}
                      gridColumn={selected}
                    />
                  </ListItem>
                ))}
              </ListContainer>
            </SectionProducts>
          </Container>
        </>
      }
    </>

  );
};

export default Men;
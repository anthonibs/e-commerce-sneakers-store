import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultPage from 'components/DefaultPage';

// Pages
const Home = React.lazy(() => import('pages/Home'));
const NotFound = React.lazy(() => import('pages/NotFound'));
const Collections = React.lazy(() => import('pages/Collections'));
const Men = React.lazy(() => import('pages/Men'));
const Women = React.lazy(() => import('pages/Women'));
const About = React.lazy(() => import('pages/About'));
const Contact = React.lazy(() => import('pages/Contact'));
const Cart = React.lazy(() => import('pages/Cart'));
const ProductItem = React.lazy(() => import('components/ProductItem'));


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/men' element={<Men />} />
          <Route path='/men/:orderID' element={<ProductItem />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

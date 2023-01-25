import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultPage from 'components/DefaultPage';

// // Pages
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Collections from 'pages/Collections';
import Men from 'pages/Men';
import Women from 'pages/Women';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Cart from 'pages/Cart';
import ProductItem from 'components/ProductItem';

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

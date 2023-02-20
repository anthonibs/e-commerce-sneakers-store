import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Container } from './DefaultPage';
import ScrollToTop from 'components/ScrollToTop';

const DefaultPage = () => {
  return (
    <Container>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

export default DefaultPage;


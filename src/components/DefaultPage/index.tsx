import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Container } from './DefaultPage';

const DefaultPage = () => {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

export default DefaultPage;


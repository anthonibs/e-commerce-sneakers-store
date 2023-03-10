import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import themeStyle from 'styles/theme';
import AppRoutes from 'routes';
import { CartProvider } from 'shared/context/useCart';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback='Loading...'>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles />
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);


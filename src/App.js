import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle, { theme } from './styles/global';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
//import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

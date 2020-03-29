// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';

// == Import
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <Home />
    <Footer />
  </AppStyled>
);

// == Export
export default App;

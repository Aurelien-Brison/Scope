// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Main/Home';
import Login from 'src/containers/Main/Login';
import Register from 'src/containers/Main/Register';
import QuickStart from 'src/components/Main/QuickStart';

// == Import
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/quickstart">
          <QuickStart />
        </Route>
        <Route exact path="/advanced">
          <Register />
        </Route>
        {/* <Redirect to="/login" /> */}
      </Switch>
      
    </>
    <Footer />
  </AppStyled>
);

// == Export
export default App;

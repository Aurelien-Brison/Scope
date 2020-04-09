// == Import npm
import React from 'react';
import { GoSignIn } from 'react-icons/go';
import PropTypes from 'prop-types';
import { Link, NavLink, Route } from 'react-router-dom';


import HeaderStyled from './HeaderStyled';
// == Import

// == Composant
const Header = ({ token, loggedMessage }) => {

  console.log('le token est' + token);
  return (
    <HeaderStyled>
      <Link className="app-title" to="/">
          Scope
      </Link>
      <div className="header-btns">
      {/* Check si l'utilisateur est connecté */}
      <Route exact path="/">
        { token != '' && (
          <>
            <div>{ loggedMessage }</div>
            <NavLink
              to="/login"
              className="navlink"
              activeClassName="signin-btn"
            >
              Se déconnecter
            </NavLink>
          </>
        )}
        { token === '' && (
          <>
            <NavLink
              to="/login"
              className="navlink"
              activeClassName="signin-btn"
            >
              Se connecter
            </NavLink>
            <NavLink
              to="/register"
              className="signin"
              activeClassName="signin-btn"
            >
              S'enregistrer
            </NavLink>
          </>
        )}
      </Route>

      <Route exact path="/register">
        <NavLink
            to="/login"
            activeClassName="signin-btn"
          >
            Se connecter
        </NavLink>
      </Route>
        
      <Route exact path="/login">
        <NavLink
          to="/register"
          activeClassName="signin-btn"
        >
          S'enregistrer
        </NavLink>
      </Route>
        
      </div>
    </HeaderStyled>
  );
};

Header.propTypes = {
  // displayActionModal: PropTypes.func.isRequired,
  // loadProfilId: PropTypes.func.isRequired,
  // passengers: PropTypes.array.isRequired,
};

// == Export
export default Header;

// == Import npm
import React from 'react';
import { GoSignIn } from 'react-icons/go';
import PropTypes from 'prop-types';

import HeaderStyled from './HeaderStyled';
// == Import

// == Composant
const Header = () => {

  return (
    <HeaderStyled>
      <div className="app-title">
        Scope
      </div>
      <div className="header-btns">
        <button
          className="signin-btn"
          type="button"
        >Se connecter
        </button>
        <button
          className="signup-btn"
          type="button"
        >S'inscrire
        </button>
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

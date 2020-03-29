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
      <GoSignIn />
      <div className="app-title">
        Scope
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

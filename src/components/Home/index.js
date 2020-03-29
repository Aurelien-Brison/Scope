// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import HomeStyled from './HomeStyled';
// == Import

// == Composant
const Home = () => {

  return (
    <HomeStyled>
      Home
    </HomeStyled>
  );
};

Home.propTypes = {
  // displayActionModal: PropTypes.func.isRequired,
  // loadProfilId: PropTypes.func.isRequired,
  // passengers: PropTypes.array.isRequired,
};

// == Export
export default Home;

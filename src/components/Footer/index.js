// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import FooterStyled from './FooterStyled';
// == Import

// == Composant
const Footer = () => {

  return (
    <FooterStyled>
      Footer
    </FooterStyled>
  );
};

Footer.propTypes = {
  // displayActionModal: PropTypes.func.isRequired,
  // loadProfilId: PropTypes.func.isRequired,
  // passengers: PropTypes.array.isRequired,
};

// == Export
export default Footer;

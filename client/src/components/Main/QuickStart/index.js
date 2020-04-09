// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import QuickStartStyled from './QuickStartStyled';
// == Import

// == Composant
const QuickStart = () => {

  return (
    <QuickStartStyled className="container-fluid">
      <div className="row">
        <div className="col-md-5 left-home">
          
        </div>
        <div className="col-md-7 right-home">
          
        </div>
      </div>
    </QuickStartStyled>
  );
};

QuickStart.propTypes = {
  // displayActionModal: PropTypes.func.isRequired,
  // loadProfilId: PropTypes.func.isRequired,
  // passengers: PropTypes.array.isRequired,
};

// == Export
export default QuickStart;

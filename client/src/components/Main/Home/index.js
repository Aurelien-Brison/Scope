// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import HomeStyled from './HomeStyled';
// == Import

// == Composant
const Home = () => {

  return (
    <HomeStyled className="container-fluid">
      <div className="row">
        <div className="col-md-5 left-home">
          <h1>Votre assistant de réglage</h1>
          <h2>Régler une optique ne devrait pas être si compliqué</h2>
          <div className="start-block">
            <h3>Réglage basique</h3>
            <h4>Sans connexion - Visiteur</h4>
            <Link className="btn-link" to="/quickstart">
              <button type="button" className="start-btn">Réglage rapide</button>
            </Link>
          </div>
          <div className="start-block">
            <h3>Réglage avancé</h3>
            <h4>Réglage DRO - Enregistrer votre équipement - Partager vos réglages</h4>
            <Link className="btn-link" to="/advanced">
              <button type="button" className="start-btn">Réglage avancé</button>
            </Link>
          </div>
        </div>
        <div className="col-md-7 right-home"></div>
      </div>
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

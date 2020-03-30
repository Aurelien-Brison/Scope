import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import LoginSTyled from './LoginStyled';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <LoginSTyled className="login-form">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-register-block">
            <FacebookLogin
              // appId="1088597931155576"
              // autoLoad={true}
              // fields="name,email,picture"
              // onClick={componentClicked}
              // callback={responseFacebook} 
              />
          </div>
          <div className="col-md-6">
            <form autoComplete="off" className="register-form-element" onSubmit={handleSubmit}>
              <Field
                name="prenom"
                placeholder="Prenom"
                onChange={changeField}
                value={email}
              />
              <Field
                name="nom"
                placeholder="Nom"
                onChange={changeField}
                value={email}
              />
              <div className="split"></div>
              <Field
                name="email"
                placeholder="Adresse Email"
                onChange={changeField}
                value={email}
              />
              <div className="split"></div>
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
              <Field
                name="password"
                type="password"
                placeholder="Confirmer mot de passe"
                onChange={changeField}
                value={password}
              />
              <button
                type="submit"
                className="login-submit-button"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoginSTyled>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;

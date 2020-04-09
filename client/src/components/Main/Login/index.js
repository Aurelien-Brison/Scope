import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// import PropTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';
import { Redirect } from 'react-router-dom'

import Field from './Field';
// import { useField } from './hooks';

import LoginSTyled from './LoginStyled';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  changeValue,
  handleLogout,
  isLogged,
  loggedMessage,
  redirectUrl,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  
  return (
    <LoginSTyled className="login-form">
    { redirectUrl != '' && <Redirect to={redirectUrl} />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-register-block">
            {/* <div className="g-signin2" data-width="210" data-height="40" data-longtitle="true">Connexion avec Google</div> */}
            <GoogleLogin
              clientId="929012182632-226mgu2fbe1fljvbkr6isun4dg9f8rnb"
              onSuccess=""
              onFailure=""
              buttonText="Connexion avec Google"
              className="btnGoogle"
            />
            <div className="split"></div>
            <FacebookLogin
              cssClass="fb-btn"
              textButton="&nbsp;&nbsp;Connexion avec Facebook"
              icon={<FaFacebookF size={18} />}
              
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
                name="email"
                placeholder="Adresse Email"
                onChange={changeValue}
                value={email}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeValue}
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
  // email: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  // changeField: PropTypes.func.isRequired,
  // handleLogin: PropTypes.func.isRequired,
  // handleLogout: PropTypes.func.isRequired,
  // isLogged: PropTypes.bool,
  // loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;

import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import LoginSTyled from './LoginStyled';

const LoginForm = ({
  firstName,
  lastName,
  email,
  password,
  verifiedPassword,
  changeValue,
  register,
}) => {

  const handleSubmit = (evt) => {
    console.log(evt);
    evt.preventDefault();
    register();
  };

  const validateForm = () => (
      firstName.length > 0 &&
      lastName.length > 0 &&
      (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) &&
      password.length > 3 &&
      password === verifiedPassword 
    );
    
  return (
    <LoginSTyled className="login-form">
      <h1>S'enregistrer</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form autoComplete="off" className="register-form-element" onSubmit={handleSubmit}>
              <Field
                name="firstName"
                placeholder="Prenom"
                onChange={changeValue}
                value={firstName}
                classAdd={firstName.length > 0 && ('good')}
              />
              <Field
                name="lastName"
                placeholder="Nom"
                onChange={changeValue}
                value={lastName}
                classAdd={lastName.length > 0 && ('good')}
              />
              <div className="split"></div>
              <Field
                name="email"
                type="email"
                placeholder="Adresse Email"
                onChange={changeValue}
                value={email}
                classAdd={email.length > 0 && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ? 'good' : 'bad')}
              />
              <div className="split"></div>
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeValue}
                value={password}
                minlength={4} 
                classAdd={password.length > 0 && (password.length > 3 ? 'good' : 'bad')}
              />
              <Field
                name="verifiedPassword"
                type="password"
                placeholder="Confirmer mot de passe"
                onChange={changeValue}
                value={verifiedPassword}
                minlength={4} 
                classAdd={verifiedPassword.length > 0 && (password.length > 3 & password === verifiedPassword ? 'good' : 'bad')}
              />
              <button
                type="submit"
                className="login-submit-button"
                hidden={!validateForm()}
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

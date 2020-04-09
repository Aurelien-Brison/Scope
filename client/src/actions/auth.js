// == Action types
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOG_IN = 'LOG_IN';
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const REGISTER = 'REGISTER';


// == Action creators

//
export const changeValue = (newValue, name) => ({
  type: CHANGE_VALUE,
  name,
  value: newValue,
});

export const logIn = () => ({
  type: LOG_IN,
});

//
export const register = () => ({
  type: REGISTER,
});

export const loginUser = (data) => ({
  type: LOGIN_USER,
  ...data,
});

export const logOut = () => ({
  type: LOG_OUT,
});

// creer l'action qui va etrte checké par le middleware auth
export const checkLogged = () => ({
  type: CHECK_LOGGED,
});


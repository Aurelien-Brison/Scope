// == Action types
export const CHANGE_SETTINGS_VALUE = 'CHANGE_SETTINGS_VALUE';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';


// == Action creators

export const changeSettingsValue = (newValue, name) => ({
  type: CHANGE_SETTINGS_VALUE,
  name,
  value: newValue,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (isLogged, user) => ({
  type: SAVE_USER,
  username: user.username,
  isLogged,
});

export const logOut = () => ({
  type: LOG_OUT,
});

// creer l'action qui va etrte checké par le middleware auth
export const checkLogged = () => ({
  type: CHECK_LOGGED,
});


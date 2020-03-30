// import data from 'src/data/exchangeData';

import { CHANGE_SETTINGS_VALUE, SAVE_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  username: null,
  email: '',
  password: '',
  isLogged: false,
  loggedMessage: null,
};

function recipe(state = initialState, action = {}) {


  switch (action.type) {
    case CHANGE_SETTINGS_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        username: action.username,
        email: '',
        password: '',
        isLogged: action.isLogged,
        loggedMessage: `Bonjour ${action.username}`,
      };
    case LOG_OUT:
      return {
        ...state,
        username: '',
        isLogged: false,
      };
    default:
      return state;
  }
}

export default recipe;

// import data from 'src/data/exchangeData';

import { CHANGE_VALUE, LOGIN_USER, LOG_OUT, REGISTER } from 'src/actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  token: '',
  verifiedPassword: '',
  isLogged: false,
  loggedMessage: '',
  redirect: '',
}; 

function recipe(state = initialState, action = {}) {


  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_USER:
      return {
        ...state,
        firstName: action.firstName.charAt(0).toUpperCase() + action.firstName.slice(1),
        lastName: action.lastName.charAt(0).toUpperCase() + action.lastName.slice(1),
        token: action.token,
        isLogged: true,
        loggedMessage: `Bonjour ${action.firstName}`,
        redirect: '/',
      };
    case REGISTER:
      return {
        ...state,
        isLogged: true,
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

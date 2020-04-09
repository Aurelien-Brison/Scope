import axios from 'axios';
import { REGISTER, LOG_IN, loginUser } from 'src/actions/auth';
import { Redirect } from "react-router-dom";


const headers = {
  "Content-Type": "application/json"
};

const burl = "http://localhost:3001";

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  console.log(store.getState().auth.password);
  switch (action.type) {
    case REGISTER:
      console.log(store.getState().auth.email);

      axios.post(`${burl}/user/signup`, {
        firstName: store.getState().auth.firstName,
        lastName: store.getState().auth.lastName,
        email: store.getState().auth.email,
        password: store.getState().auth.password,
        },
        { 
          headers: headers 
        }
      )
      .then((response) => {
        console.log('succèsfdfdfd : ', response);
      })
      .catch((error) => {
        console.log('pasbon');
        console.warn(error);
      });

      next(action);
      break;

    case LOG_IN:
      console.log(store.getState().auth.email);

      axios.post(`${burl}/user/login`, {
        email: store.getState().auth.email,
        password: store.getState().auth.password,
        },
        { 
          headers: headers 
        }
      )
      .then((response) => {
        console.log('login sucess : ', response.data);
        store.dispatch(loginUser(response.data));
        
      })
      .catch((error) => {
        console.log('pasbon');
        console.warn(error);
        console.log(error.text)
      });

      next(action);
      break;
    
      next(action);
      break;

    default:
      // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};

export default authMiddleware;

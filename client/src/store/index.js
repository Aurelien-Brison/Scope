import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import recipesMiddleware from 'src/middleware/recipesMiddleware';
import authMiddleware from 'src/middleware/authMiddleware';
// import websocketMiddleware from 'src/middlewares/websocketMiddleware';
// import loggerMiddleware from 'src/middlewares/loggerMiddleware';
// import currenciesMiddleware from 'src/middlewares/currenciesMiddleware';

import combineReducer from '../reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    // recipesMiddleware,
    authMiddleware,
    // websocketMiddleware,
  ),
);

const store = createStore(combineReducer, enhancers);

export default store;

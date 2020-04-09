import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipe';

const recipesMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_RECIPES:
      // console.log('c\'est le moment de faire l\'appel à l\'API');
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          console.log('pasbon');
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};

export default recipesMiddleware;

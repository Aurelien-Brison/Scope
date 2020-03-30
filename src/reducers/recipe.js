// import data from 'src/data/exchangeData';

import { SAVE_RECIPES} from "src/actions/recipe";
import data from 'src/data';

const initialState = {
  recipes: null,
  loading: true,
};

function recipe(state = initialState, action = {}) {


  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };
    default:
      return state;
  }
}

export default recipe;

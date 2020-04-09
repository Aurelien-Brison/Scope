// == Action types
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';


// == Action creators

export const fetchRecipes = () => {
  console.log('fetche recipe ok');
  return ({
    type: FETCH_RECIPES,
  });
}

export const saveRecipes = (recipes) => {
  console.log(recipes)
return ({
  type: SAVE_RECIPES,
  recipes,
});
}

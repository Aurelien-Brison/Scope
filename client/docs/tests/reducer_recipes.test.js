// import d'une syntaxe Chai
import { expect } from 'chai';

// import de la fonction à tester
import reducer from '../src/reducers/recipes';

// on importe aussi le fichier d'actions => on a besoin du action creator pour
// tester le reducer
import { saveRecipes } from '../src/actions/recipes';

// only (sur describe ou sur it) permet d'exécuter seulement ce bloc de test
// bien penser à l'enlever une fois qu'on a fini de mettre au point notre test ;)
// describe.only('reducer for recipes', () => {

// skip (sur describe ou sur it) permet de zapper le bloc de test
// bien penser à l'enlever sinon le test ne sera plus jamais exécuté ;)
// describe.skip('reducer for recipes', () => {

describe('reducer for recipes', () => {
  it('is a function', () => {
    // assertion pour vérifier si reducer existe (détecter un problème d'import)
    // eslint-disable-next-line no-unused-expressions
    expect(reducer).to.exist;

    // assertion pour vérifier si reducer est bien une fonction
    expect(reducer).to.be.a('function');
  });

  it('check initial state', () => {
    // le reducer a des valeurs par défaut pour les paramètres, si je l'utilise
    // sans argument je récupère le state initial (c'est ce que le store utilise
    // au moment de sa création ;) )

    // https://www.chaijs.com/api/bdd/#method_eql
    expect(reducer()).to.be.eql({
      recipes: null,
      loading: true,
    });

    // si pour debugguer on met une autre valeur initiale (par exemple on met en dur
    // une recette avec un nom très long) => en lançant les tests on sera averti
    // qu'on a une régression
  });

  it('check treatment of action SAVE_RECIPES', () => {
    // vérifier le action creator
    expect(saveRecipes).to.be.a('function');

    // on crée un état qu'on va fournir au reducer => les valeurs devraient être
    // différentes de ce qu'on attend à la sortie du reducer
    const stateBefore = {
      recipes: null,
      // le traitement de l'action devrait mettre 'false' => on met une valeur 
      // différente ici
      loading: true,
    };

    // on crée une action qu'on va fournir au reducer, pratique on a un action
    // creator pour nous aider
    // pour le payload on met ce qu'on veut, de préférence en respectant le type
    // de données attendu, ici un tableau d'objets
    const newRecipes = [
      { a: 1 },
      { b: 2 },
    ];
    const action = saveRecipes(newRecipes);

    expect(reducer(stateBefore, action)).to.be.eql({
      // on veut simplement vérifier que le payload de l'action a bien atterri à
      // l'endroit voulu dans le nouveau state (donc peu importe la valeur)
      recipes: newRecipes,
      loading: false,
    });
  });
});

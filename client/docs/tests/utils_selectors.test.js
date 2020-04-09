// import d'une syntaxe Chai
import { expect } from 'chai';

// import de la fonction à tester
import { slugifyTitle } from '../src/utils/selectors';

/* describe décrit le bloc à tester, 2 paramètres :
  - un texte qui décrit le bloc
  - la callback qui permet d'exécuter les tests pour ce bloc
On peut imbriquer les "describe"
*/
describe('selectors', () => {
  describe('function slugifyTitle', () => {
    /* it décrit un cas de test, 2 paramètres :
      - un texte qui décrit le cas de test
      - la callback qui permet d'exécuter les tests pour ce cas
    */
    it('is a function', () => {
      // assertion pour vérifier si slugifyTitle est bien une fonction
      expect(slugifyTitle).to.be.a('function');
    });

    it('replaces spaces', () => {
      expect(slugifyTitle('pizza margherita')).to.be.equal('pizza-margherita');
    });

    // objectif : écrire un cas de test qui vérifie que les majuscules sont
    // remplacées par des minuscules
    it('replaces upper case characters', () => {
      expect(slugifyTitle('Pizza-MarGherita')).to.be.equal('pizza-margherita');
    });

    it('replaces + character', () => {
      expect(slugifyTitle('+st+ar+wars+')).to.be.equal('starwars');
    });
  });
});

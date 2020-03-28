import React from 'react';

// Enzyme permet de faire le rendu d'un composant React avec 'shallow'
// on peut ensuite tester le contenu, les enfants, ...
// https://airbnb.io/enzyme/docs/api/shallow.html
import { shallow } from 'enzyme';
import { expect } from 'chai';

// import du composant à tester
import RecipeCard from '../src/components/Page/Home/RecipeCard';

describe('<RecipeCard />', () => {
  it('RecipeCard uses information given as props', () => {
    // je fais le rendu du composant en lui fournissant des valeurs fictives pour
    // les props
    // écrit en JSX => il faut importer React
    const wrapper = shallow(<RecipeCard thumbnail="img1.png" title="Pizza" difficulty="Facile" />);

    // je récupère tous les éléments h2 dans le rendu de mon composant
    const elementsH2 = wrapper.find('h2');

    // je vérifie que j'en ai bien un seul
    expect(elementsH2).to.have.lengthOf(1);

    // sur le h2, je vérifie que le texte est bien la valeur fournie en prop
    expect(elementsH2.text()).to.equal('Pizza');
    // => si on avait mis une valeur en dur dans le composant (debugguer l'affichage
    // avec un nom de recette très long), le test nous informe

    // _TODO_ : il faudrait tester aussi l'utilisation des autres props, et vérifier
    // avec d'autres valeurs fictives (faire un deuxième rendu du composant, avec d'autres
    // valeurs) => si on met "Pizza" en dur dans le composant, on a un bug mais le
    // test ne le voit pas
  });
});

import state from './state';

export default {
  animalsCount: () => {
    return state.cats.length + state.dogs.length;
  },
  getAllCats: () => {
    return state.pets.filter(pet => pet.species === 'cat');
  },
};

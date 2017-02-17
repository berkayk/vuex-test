import { ADD_PRODUCT, ADDING_PRODUCT } from '../mutation-types';

const products = {
  namespaced: true,
  state: {
    isAdding: false,
    list: [{id: 1, name: 'Latte'}, {id: 2, name: 'Cappucino'}, {id: 3, name: 'Chemex'}],
  },
  getters: {
    numProducts: state => {
      return state.list.length;
    },
    isAdding: state => state.isAdding
  },
  mutations: {
    [ADD_PRODUCT](state, payload) {
      state.list.push(payload);
      state.isAdding = false;
    },
    [ADDING_PRODUCT](state) {
      state.isAdding = true;
    }
  },
  actions: {
    addAsync({commit}, product) {
      console.log("Adding async product.");
      commit(ADDING_PRODUCT);
      setTimeout(() => {
        console.log("Added async product.");
        commit(ADD_PRODUCT, product);
      }, 3000);
    },
    addWithPromise({ commit }, product) {
      console.log("Adding with promise.");
      return new Promise((resolve, reject) => {
        commit(ADDING_PRODUCT);
        setTimeout(() => {
          console.log("Added async product with promise.");
          commit(ADD_PRODUCT, product);
          resolve();
        }, 3000);
      });
    }
  }
}

export default products;
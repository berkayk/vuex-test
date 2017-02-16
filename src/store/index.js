import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_PRODUCT, ADDING_PRODUCT } from './mutation-types';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    products: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
    isAdding: false
  },
  getters: {
    numProducts: state => {
      return state.products.length;
    },
    isAdding: state => state.isAdding
  },
  mutations: {
    [ADD_PRODUCT](state, payload) {
      state.products.push(payload);
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
})

export default store
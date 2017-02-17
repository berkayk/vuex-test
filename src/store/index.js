import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import products from './modules/products';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: user,
    products: products
  },
  state: {
  }
});

export default store
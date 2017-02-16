import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Products from 'components/Products'
import AddProduct from 'components/AddProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/addProduct',
      name: 'AddProduct',
      component: AddProduct
    }
  ]
})

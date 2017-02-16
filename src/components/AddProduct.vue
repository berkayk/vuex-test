<template>
  <div class="hello">
    <h1 class="title">Add Product</h1>
    <p>{{ productCount }}</p>
    <div v-if="isAdding">Adding in progress...</div>
    <button @click="testAddProduct">Add Async</button>
    <button @click="testAddProductWithPromise">Add With Promise</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import { ADD_PRODUCT }  from '../store/mutation-types';

  export default {
    name: 'AddProduct',
    data() {
      return {

      }
    },
    methods: {
      testAddProduct() {
        this.addAsync({ id: 3, name: 'Naber' });
        // this.add({id: 3, name: 'Selam'});
      },
      testAddProductWithPromise() {
        this.addPromise({id: 4, name: 'Söz'}).then(() => {
          console.log("Test Add Product completed!");
        });
      },
      ...mapActions({
        addAsync: 'addAsync', // map this.add() to this.$store.dispatch('increment'),
        addPromise: 'addWithPromise'
      })
    },
    computed: {
      ...mapGetters({
        // map this.doneCount to store.getters.doneTodosCount
        productCount: 'numProducts',
        isAdding: 'isAdding'
      })
    },
  }

</script>
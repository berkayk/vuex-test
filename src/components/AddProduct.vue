<template>
  <div class="hello">
    <h1 class="title">Add Product</h1>
    <p>{{ productCount }}</p>
    <div v-if="isAdding">Adding in progress...</div>
    <input v-model="productName" placeholder="edit me">
    <button :disabled="isAdding" @click="testAddProduct">Add Async</button>
    <button :disabled="isAdding" @click="testAddProductWithPromise">Add With Promise</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import { ADD_PRODUCT }  from '../store/mutation-types';

  export default {
    name: 'AddProduct',
    data() {
      return {
        productName: ""
      }
    },
    methods: {
      testAddProduct() {
        let newP = {
          id: this.productCount + 1,
          name: this.productName,
          created_at: new Date().getTime()
        }
        this.addAsync(newP);
        this.productName = "";
        // this.add({id: 3, name: 'Selam'});
      },
      testAddProductWithPromise() {
        let newP = {
          id: this.productCount + 1,
          name: this.productName,
          created_at: new Date().getTime()
        }
        this.addPromise(newP).then(() => {
          console.log("Test Add Product completed!");
          this.productName = "";
        });
      },
      ...mapActions('products', {
        addAsync: 'addAsync', // map this.add() to this.$store.dispatch('increment'),
        addPromise: 'addWithPromise'
      })
    },
    computed: {
      ...mapGetters('products', {
        // map this.doneCount to store.getters.doneTodosCount
        productCount: 'numProducts',
        isAdding: 'isAdding',
      })
    },
  }

</script>
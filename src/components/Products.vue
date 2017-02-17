<template>
  <div class="hello">
    <h1 class="title">Hello {{ username }}</h1>
    <h3>Product List ({{ numProducts }})</h3>
    <ul>
      <li v-for="product in list">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'products',
    data() {
      return {

      }
    },
    computed: {
    ...mapState('products', {
    list: state => state.list
  }),
    ...mapGetters('products', {
    // map this.doneCount to store.getters.doneTodosCount
    numProducts: 'numProducts'
  }),
    ...mapState('user', {
    username: state => state.name
  })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  .title {
    color: #CCCCCC;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
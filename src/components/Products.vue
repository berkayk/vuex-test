<template>
  <div class="hello">
    <h1 class="title">Products (<span>{{ productCount }}</span>)</h1>
    <ul>
      <li v-for="product in products">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'products',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['count', 'products']),
    ...mapGetters({
        // map this.doneCount to store.getters.doneTodosCount
        productCount: 'numProducts'
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

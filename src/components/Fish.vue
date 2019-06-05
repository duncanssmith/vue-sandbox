<template>
  <div>
    <h1>{{ heading }}</h1>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(product, index) in products" :key="product.id">
        <p>{{product.name}}</p>
        <p>({{product.qty}} @ {{product.price.toFixed(2)}})</p>
        <p>£{{getProductTotal(index).toFixed(2)}}</p>
        <img :src="product.image" :alt="product.name" width="100px"/>
        <p>£{{product.price.toFixed(2)}} per kg</p>
      </li>
    </ul>

          <button v-on:click="this.$emit('incrementBy', 5);">
            Increment by 5 in parent 
          </button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      store: 'Department: ',
      department: 'Fish',
      stock: [],
      products: [
        {
          id: 1,
          name: 'Trout',
          price: 9.00,
          total: 0.0,
          inStock: false,
          image: '/static/fish.png',
          country: 'Scotland',
          qty: 0
        }
      ]
    }
  },

  computed: {
    heading () {
      return this.store + ' ' + this.department
    }
  },

  methods: {
    getProductTotal (index) {
      return this.products[index].qty * this.products[index].price
    }
  }
}

</script>

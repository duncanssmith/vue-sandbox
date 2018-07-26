<template>
  <div>
    <h1>{{ heading }}</h1>
    <h2>{{ title }}</h2>

    <table>
      <tr>
        <td>Cart total:</td>
        <td>&nbsp;</td>
        <td>{{cart}} items</td>
      </tr>
      <tr>
        <td>Total price:</td>
        <td>&nbsp;</td>
        <td><b> £{{cheeseTotalPrice.toFixed(2)}}</b></td>
      </tr>
      <tr v-for="(product, index) in products" :key="product.id">
        <td>{{product.name}}</td>
        <td>({{product.qty}} @ {{product.price.toFixed(2)}})</td>
        <td>£{{getProductTotal(index).toFixed(2)}}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td style="margin:10px; padding:10px;" v-for="(cheese, index) in products"
              :key="cheese.id">
          <h4> {{ cheese.name }} </h4>
          <h6>{{cheese.country}}</h6>
          <h6 v-if="!cheese.inStock" :class="{ outOfStock: !cheese.inStock }">{{ cheese.name }} - out of stock</h6>
          <h6 v-else>&nbsp;</h6>
          <img :src="cheese.image" :alt="cheese.name" width="100px"/>
          <!-- @mouseover="addToCart(index)"/> -->
          <p>£{{cheese.price.toFixed(2)}} per kg</p>
          <button v-on:click="addToCart(index); incrementTotal(index)"
            :style="styleObject"
            :disabled="!cheese.inStock">
            Add to cart ({{cheese.qty}})
          </button>
          <button v-on:click="removeFromCart(index); decrementTotal(index)"
            :disabled="!cheese.qty"
            :style="{ hideButton: !cheese.qty }">
            Remove</button>
          <br/>
          <button v-on:click="setInStock(index)"
            :style="testSwitchIn">In stock
          </button>
          <button v-on:click="setOutOfStock(index)"
            :style="testSwitchOut">Out of stock
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      store: 'Department: ',
      department: 'Cheese',

      styleObject: {
        fontSize: '13px'
      },
      testSwitchIn: {
        backgroundColor: 'green'
      },
      testSwitchOut: {
        backgroundColor: 'pink'
      },
      disabledButton: {
        backgroundColor: 'grey',
        color: 'grey',
        fontSize: '13px'
      },
      hideButton: {
        display: 'none'
      },
      lineThru: {
        textDecoration: 'line-through'
      },

      message: 'Hello customers!',
      stock: [],
      // products: ['Boots', 'Hats', 'Scarves', 'Gloves'],
      products: [
        {
          id: 1,
          name: 'Cheddar',
          price: 5.00,
          total: 0.0,
          inStock: false,
          image: '/static/cheddar.png',
          country: 'England',
          qty: 0
        },
        {
          id: 2,
          name: 'Stilton',
          price: 11.90,
          total: 0.0,
          inStock: false,
          image: '/static/stilton.png',
          country: 'England',
          qty: 0
        },
        {
          id: 3,
          name: 'Camembert',
          price: 8.00,
          total: 0.0,
          inStock: false,
          image: '/static/camembert.png',
          country: 'France',
          qty: 0
        },
        /*
        {
          id: 4,
          name: 'Brie',
          price: 9.50,
          total: 0.0,
          inStock: false,
          image: '/static/brie.png',
          country: 'France',
          qty: 0
        },
        {
          id: 5,
          name: 'Blue Vinny',
          price: 11.00,
          total: 0.0,
          inStock: false,
          image: '/static/bluevinny.png',
          country: 'England',
          qty: 0
        },
        */
        {
          id: 6,
          name: 'Emmental',
          price: 15.00,
          total: 0.0,
          inStock: false,
          image: '/static/emmental.png',
          country: 'Switzerland',
          qty: 0
        },
        {
          id: 7,
          name: 'Mozzarella',
          price: 8.60,
          total: 0.0,
          inStock: false,
          image: '/static/mozzarella.png',
          country: 'Italy',
          qty: 0
        /*
        },
        {
          id: 8,
          name: 'Edam',
          price: 7.26,
          total: 0.0,
          inStock: false,
          image: '/static/edam.png',
          country: 'Holland',
          qty: 0
        */
        }
      ],
      cart: 0,
      cheeseTotalPrice: 0.0
    }
  },

  computed: {
    heading () {
      return this.store + ' ' + this.department
    },
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },

  methods: {
    getProductTotal (index) {
      return this.products[index].qty * this.products[index].price
    },

    setInStock (index) {
      if (!this.products[index].inStock) {
        this.products[index].inStock = true
      }
    },

    setOutOfStock (index) {
      if (this.products[index].inStock) {
        this.products[index].inStock = false
      }
    },

    addToCart (index) {
      this.cart += 1
      this.products[index].qty += 1
    },

    removeFromCart (index) {
      if (this.cart > 0) {
        this.cart -= 1
      }
      if (this.products[index].qty > 0) {
        this.products[index].qty -= 1
      }
    },

    incrementTotal (index) {
      this.cheeseTotalPrice += +this.products[index].price.toFixed(2)
      this.cheeseTotalPrice = +this.cheeseTotalPrice.toFixed(2)
      // console.log(this.cart, this.products[index].qty, this.cheeseTotalPrice.toFixed(2))
      return this.cheeseTotalPrice
    },

    decrementTotal (index) {
      // let checkNeg = this.cheeseTotalPrice - this.products[index].price
      // if (checkNeg >= 0) {
      this.cheeseTotalPrice -= +this.products[index].price.toFixed(2)
      // }
      // console.log(this.cart, this.products[index].qty, this.cheeseTotalPrice.toFixed(2))
      return this.cheeseTotalPrice
    }
  }
}

</script>

<template>
  <!-- <div class="cheese"> -->
  <div>
    <h1>{{ heading }}</h1>
    <h2>Create/Edit Cheese</h2>

    <ul>
      <li style="margin:10px; padding:10px;" v-for="(product) in cheeses"
              :key="product.id">
        <p> {{ product.name }} ({{product.country}}),
          <span v-if="!product.inStock" :class="{ outOfStock: !product.inStock }">Out of stock</span>
          <span v-else>&nbsp;</span>
          <img :src="product.image" :alt="product.name" width="100px"/>
            <!-- @mouseover="addToCart(index)"/> -->
            £{{product.price.toFixed(2)}} per kg
        </p>
      </li>
    </ul>

    <form @submit.prevent="addCheese">
      <input type="text" placeholder="id" v-model="cheese" name="id">
      <input type="text" placeholder="name" v-model="cheese" v-validate="'min:3'" name="name">
      <input type="text" placeholder="price" v-model="cheese" name="price">
      <input type="text" placeholder="inStock" v-model="cheese" name="inStock">
      <input type="text" placeholder="image" v-model="cheese" name="image">
      <input type="text" placeholder="country" v-model="cheese" name="country">
      <input type="text" placeholder="qty" v-model="cheese" name="qty">
        <!-- <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX"> -->
          <!-- <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill')}}</p> -->
        <!-- </transition> -->
      <!-- <button v-on:click="addToCart(index); incrementTotal(index)" -->
      <button :style="styleObject">Add cheese </button>
    </form>

  </div>

</template>

<script>
/* eslint-disable */
  export default {
    name: 'AddCheese',
    data () {
      return {
      store: 'Queens Supermarket: ',
      department: 'Cheese',
        msg: 'Add Cheese page',
        cheeses: [
          {
            id: 1,
            name: 'Cheddar',
            price: 5.00,
            total: 0.0,
            inStock: false,
            image: '/static/cheddar.png',
            country: 'England',
            qty: 0
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

h1, h2 {
  font-weight: normal;
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

  .holder {
    background: #ffd;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }
</style>

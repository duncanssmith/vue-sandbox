<template>
  <div id="app">
    <nav>
      <router-link to="/" name="supermarket">Supermarket</router-link>
      <router-link to="/cheese" name="cheese">Cheese</router-link>
      <router-link to="/fish" name="fish">Fish</router-link>
      <router-link to="/veg" name="veg">Veg</router-link>
      <router-link to="/admin" name="admin">Admin</router-link>
      <router-link to="/phone" name="phone">Phone</router-link>
      <router-link to="/alias" name="alias">Alias</router-link>
      <router-link to="/email" name="phone">Email</router-link>
      <!-- <router-link to="/addcheese" name="addcheese">Add Cheese</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Supermarket from './components/Supermarket.vue'
import Admin from './components/Admin.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    'supermarket': Supermarket,
    'admin': Admin
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  width: 50%;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
/* #app { */
    /* width: 50%; */
/* } */

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueTheMask from 'vue-the-mask'
import VeeValidate from 'vee-validate'

Vue.use(Vuex)
Vue.use(VueTheMask)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Supermarket from '@/components/Supermarket'
import Admin from '@/components/Admin'
import Cheese from '@/components/Cheese'
import Fish from '@/components/Fish'
import Veg from '@/components/Veg'
import PhoneField from '@/components/PhoneField'
import EmailField from '@/components/EmailField'
import AliasField from '@/components/AliasField'
import 'es6-promise'
// import AddCheese from '@/components/AddCheese'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'supermarket',
      component: Supermarket
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/cheese',
      name: 'cheese',
      component: Cheese
    },
    {
      path: '/fish',
      name: 'fish',
      component: Fish
    },
    {
      path: '/veg',
      name: 'veg',
      component: Veg
    },
    {
      path: '/phone',
      name: 'phone',
      component: PhoneField
    },
    {
      path: '/email',
      name: 'email',
      component: EmailField
    },
    {
      path: '/alias',
      name: 'alias',
      component: AliasField
    /*
    },
    {
      path: '/addCheese',
      name: 'addcheese',
      component: AddCheese
     */
    }
  ]
})

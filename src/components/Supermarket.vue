<template>
  <div>
    <h1>{{ heading }}</h1>
    <h2>{{ title }}</h2>
    <ul>
      <li><cheese></cheese></li>
      <li><fish></fish></li>
      <li><veg></veg></li>
    </ul>
  </div>
</template>

<script>
import AliasField from './AliasField.vue'
import PhoneField from './PhoneField.vue'
import EmailField from './EmailField.vue'
import Cheese from './Cheese.vue'
import Fish from './Fish.vue'
import Veg from './Veg.vue'
// import AddCheese from './AddCheese.vue'

export default {
  components: {
    'aliasField': AliasField,
    'phoneField': PhoneField,
    'emailField': EmailField,
    'cheese': Cheese,
    'fish': Fish,
    'veg': Veg
    // 'addCheese': AddCheese,
  },
  data () {
    return {
      title: '',
      store: 'Supermarket: ',
      department: 'Main'
    }
  },

  computed: {
    heading () {
      return this.store + ' ' + this.department
    }
  },

  methods: {

  }
}

</script>

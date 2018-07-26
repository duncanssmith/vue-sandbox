<template>
  <div>
    <h1>{{ heading }}</h1>
    <h2>{{ title }}</h2>
    <ul>
      <li><alias-field :fieldName="aliasFieldName"></alias-field></li>
      <li v-for="phoneItem in phoneFieldNames" :value="phoneItem.id" :key='phoneItem.id'>
        <phone-field :fieldName="phoneItem.phoneFieldName"></phone-field>
      </li>
      <li v-for="emailItem in emailFieldNames" :value="emailItem.id" :key='emailItem.id'>
        <email-field :fieldName="emailItem.emailFieldName"></email-field>
      </li>
    </ul>
  </div>
</template>

<script>
import AliasField from './AliasField.vue'
import PhoneField from './PhoneField.vue'
import EmailField from './EmailField.vue'

export default {
  components: {
    'aliasField': AliasField,
    'phoneField': PhoneField,
    'emailField': EmailField
  },
  data () {
    return {
      title: '',
      store: 'Duncan: ',
      department: 'Admin page',
      aliasFieldName: 'Alias',
      phoneFieldNames: [
        {id: '0', phoneFieldName: 'Phone'},
        {id: '1', phoneFieldName: 'Mobile'},
        {id: '2', phoneFieldName: 'Fax'},
        {id: '3', phoneFieldName: 'Other'}
      ],
      emailFieldNames: [
        {id: '4', emailFieldName: 'Personal email'},
        {id: '5', emailFieldName: 'Work email'},
        {id: '6', emailFieldName: 'Alternative email'}
      ]
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

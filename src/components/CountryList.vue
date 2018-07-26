<template>
  <select
    v-model="selectedCountry"
    @input="event => { $emit('input', event.target.value) }"
    name="media_contacts"
    id="media_contacts"
    class="form-control">
    <option v-for="country in countries" :value="country.id" :key="country.id">
      {{ country.shortName}}, +{{ country.code}}
    </option>
  </select>
</template>

<script>
  export default {
    props: {
      value: null,
      countries: {
        type: Array,
        required: true
      }
    },

    mounted () {
      this.selectedCountry = this.value
    },

    watch: {
      value: function (newValue) {
        this.selectedCountry = newValue
      }
    },

    data () {
      return {
        selectedCountry: null
      }
    }
  }
</script>
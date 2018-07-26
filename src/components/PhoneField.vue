<template>
  <div>
      <select
        placeholder="country"
        v-model="selectedCountry"
        @input="event => {$emit('input', event.target.value)}"
        name="db_phone"
        id="phonefield">
        <option v-for="country in countries" :value="country.id" :key="country.id">
          {{ country.shortName }} {{ country.code }}
        </option>
      </select>
      <input v-if="selectedCountry" type="text" :placeholder="placeHolder" v-mask="landlineMask" name="phone" :masked="masked">
      <input v-else type="text" :placeholder="placeHolder" name="phone" :masked="masked">
  </div>
</template>

<script>
// import Country from './CountryList.vue'

export default {
  props: {
    fieldName: String,
    countryArray: Array
  },

  mounted () {
    this.selectedCountry = this.value
  },

  watch: {
    selectedCountry: function (countryId) {
      if (countryId > 0) {
        this.getMask(countryId)
        this.masked = true
        console.log("DUNCAN 200: masked = ", this.masked)
      } else {
        this.clearMask()
        console.log("DUNCAN 201: masked = ", this.masked)
      }
    },
    countryId: function (countryId) {
      if (countryId > 0) {
        this.getMask(countryId)
      } else {
        this.clearMask()
      }
    },
    value: function (newValue) {
      this.selectedCountry = newValue
    }
  },

  data () {
    return {
      masked: false,
      landlineMask: '#XSAa',
      defaultFieldName: 'Phone',
      selectedCountry: null,
      countryId: null,
      countries: [
        {id: 0, shortName: 'EMPTY', code: '', masks: {landline: null, mobile: null}},
        {id: 14, shortName: 'Australia', code: '61', masks: {landline: '+61 #XXXXXXXXXXXXXX', mobile: '+61 #### ### ###'}},
        {id: 46, shortName: 'China', code: '86', masks: {landline: '+86 ## # #### ####', mobile: '+86 ##### ### ###'}},
        {id: 99, shortName: 'Hong Kong', code: '852', masks: {landline: '+852 ### #### ####', mobile: '+852### #### ####'}},
        {id: 103, shortName: 'Indonesia', code: '62', masks: {landline: '+62 #### ##-####-###', mobile: '+62 ### ### ####'}},
        {id: 133, shortName: 'Malaysia', code: '60', masks: {landline: '+60 ##### ##-###-###', mobile: '+60 ### ### ####'}},
        {id: 151, shortName: 'Myanmar', code: '95', masks: {landline: '+95 ## ##-##-####', mobile: '+95 ### ### ####'}},
        {id: 157, shortName: 'New Zealand', code: '64', masks: {landline: '+64 ## ## #### ####', mobile: '+64 ### ### ####'}},
        {id: 174, shortName: 'Philippines', code: '63', masks: {landline: '+63 ### ### ####', mobile: '+63 ### ### ####'}},
        {id: 199, shortName: 'Singapore', code: '65', masks: {landline: '+65 #### ####', mobile: '+65 #### ####'}},
        {id: 218, shortName: 'Taiwan', code: '886', masks: {landline: '+886 ## #### ####', mobile: '+886 (#) #### ####'}},
        {id: 221, shortName: 'Thailand', code: '66', masks: {landline: '+66 ## ### ####', mobile: '+66 ### ### ####'}},
        {id: 243, shortName: 'Vietnam', code: '84', masks: {landline: '+84 ## ### ######', mobile: '+84 ### ### ####'}}
      ],
      styleObject: {
        fontSize: '13px',
        color: '#FFFFFF',
        backgroundColor: '#773377'
      },
    }
  },

  methods: {
    getMask (countryId) {
      console.log('CountryId: ' + countryId)
      let selectedCountry = this.countries.find((country) => {
        return country.id === parseInt(countryId)
      })

      this.landlineMask = selectedCountry.masks.landline
      this.mobileMask = selectedCountry.masks.mobile
      this.masked = true
    },
    clearMask () {
      // this.getMask(0)
      // this.landlineMask = null,
      this.masked = false
      console.log("DUNCAN 100: ", this.masked)
    }
  },

  computed: {
    placeHolder () {
        return this.fieldName
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

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

  select {
    width: calc(30% - 40px);
    border: 0;
    padding: 20px;
    margin-right: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  input {
    width: calc(70% - 25px);
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

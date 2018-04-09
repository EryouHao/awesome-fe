import Vue from 'vue'
import * as filters from '../lib/filters'

export default () => {
  // global filters
  Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
}

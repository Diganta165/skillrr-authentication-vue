import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { login } from './login'
import { country } from './country'
import {update} from './update'
import {loadUpdateCountry} from './loadUpdateCountry'


export default new Vuex.Store({
  modules: {
    login,
    country,
    update,
    loadUpdateCountry
  }
})

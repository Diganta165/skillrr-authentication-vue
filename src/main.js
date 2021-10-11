import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes}  from './Router/routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({

routes,
mode:'history'

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

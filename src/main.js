import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes}  from './Router/routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

const router = new VueRouter({

routes,
mode:'history'

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

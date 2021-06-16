import Vue from 'vue'
import VueRouter from 'vue-router'
import shadow from 'vue-shadow-dom'

Vue.use(VueRouter)

import './registers'

import HomePage from './pages/Home/index.vue'
import BalancePage from './pages/Balance/index.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/balance', component: BalancePage },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.use(shadow)

const app = new Vue({
  router,
  beforeRouteEnter: () => {
    const el = document.querySelector('#pagarme-pilot > div').shadowRoot.querySelector('#single-spa-application\\:balance')
    console.log('mounted!', el)
  }
}).$mount('#root')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Uimini from 'uimini/dist/css/uimini.css'
import Card from './components/Card'

Vue.use(Uimini)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

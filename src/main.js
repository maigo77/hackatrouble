import Vue from 'vue'
import App from './App.vue'
import "./config/axios";
import router from "./router"
import store from "./config/store"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

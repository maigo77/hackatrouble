import Vue from "vue"
import Router from "vue-router"
// import Inicio from "./components/templates/Inicio"

Vue.use(Router);

const routes = [
//   { name: "home", path: "/home", component: Inicio },
  { name: "any", path: '*', redirect: '/' }
]

export default new Router({
  base: '/',
  mode: 'hash',
  routes: routes
});
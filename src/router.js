import Vue from "vue"
import Router from "vue-router"

import Inicio from "./components/Inicio"
import Login from "./components/Login"
import AceiteLocalizacao from "./components/AceiteLocalizacao"
import TiposPerfis from "./components/TiposPerfis"
import FormularioPessoa from "./components/FormularioPessoa"
import FormularioJuridica from "./components/FormularioJuridica"
import ValidarConta from './components/ValidarConta'
import ConfirmarResidencia from './components/ConfirmarResidencia'
import TelaInicial from './components/TelaInicial'

Vue.use(Router);

const routes = [
  { name: "inicio", path: "/inicio", component: Inicio },
  { name: "login", path: "/login", component: Login },
  { name: "aceiteLocalizacao", path: "/aceiteLocalizacao", component: AceiteLocalizacao },
  { name: "tiposPerfis", path: "/tiposPerfis", component: TiposPerfis },
  { name: "formularioPessoa", path: "/formularioPessoa", component: FormularioPessoa },
  { name: "formularioJuridica", path: "/formularioJuridica", component: FormularioJuridica },
  { name: "validarConta", path: "/validarConta", component: ValidarConta },
  { name: "confirmarResidencia", path: "/confirmarResidencia", component: ConfirmarResidencia },
  { name: "telaInicial", path: "/telaInicial", component: TelaInicial },
  { name: "any", path: '*', redirect: '/inicio' }
]

export default new Router({
  base: '/',
  mode: 'hash',
  routes: routes
});
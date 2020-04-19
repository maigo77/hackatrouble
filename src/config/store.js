import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    tipoPerfil: '',
    objNecessitado: {},
    objVoluntario: {},
    objComerciante: {}
  },
  mutations: {
    setTipoPerfil(state, tipoPerfil){
      state.tipoPerfil = tipoPerfil
    },
    setObjNecessitado(state, objNecessitado){
      state.objNecessitado = objNecessitado
    },
    setObjVoluntario(state, objVoluntario){
      state.objVoluntario = objVoluntario
    },
    setObjComerciante(state, objComerciante){
      state.objComerciante = objComerciante
    }
  },
  getters: {
    getTipoPerfil(state){
      return state.tipoPerfil
    },
    getObjNecessitado(state){
      return state.objNecessitado
    },
    getObjVoluntario(state){
      return state.objVoluntario
    },
    getObjComerciante(state){
      return state.objComerciante
    }
  }
});
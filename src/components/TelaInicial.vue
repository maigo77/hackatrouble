<template>
  <div class="mobile-content" id="tela-inicial">
      <TelaNecessitado v-if="abrirNecessitado" />
      <TelaVoluntario  v-if="abrirVoluntario" />
      <TelaComerciante v-if="abrirComerciante" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TelaNecessitado from './TelaNecessitado'
import TelaVoluntario from './TelaVoluntario'
import TelaComerciante from './TelaComerciante'

export default {
    components:{
        TelaNecessitado,
        TelaVoluntario, 
        TelaComerciante
    },
    data(){
        return{
            objetosVazios: [],
            abrirNecessitado: false,
            abrirVoluntario: false,
            abrirComerciante: false
        }
    },
    methods: {
        verificaObjVazio(obj) {
            if(Object.keys(obj).length !== 0){
                this.objetosVazios.push('true')
            }else{
                this.objetosVazios.push('false')
            }
        },
        verificaAberto(){
            if(this.objetosVazios[0] == 'true'){
                this.abrirNecessitado = true
            }else if(this.objetosVazios[1] == 'true'){
                this.abrirVoluntario = true
            }else if(this.objetosVazios[2] == 'true'){
                this.abrirComerciante = true
            }else{
                window.location.hash = '/'
            }
        }
    },
    computed: {
        ...mapGetters(
            {
                objNecessitado: 'getObjNecessitado',
                objVoluntario: 'getObjVoluntario',
                objComerciante: 'getObjComerciante'
            }
        )
    },
    mounted(){
        this.verificaObjVazio(this.objNecessitado)
        this.verificaObjVazio(this.objVoluntario)
        this.verificaObjVazio(this.objComerciante)
    },
    watch: {
        objetosVazios(){
            if(this.objetosVazios.length == 3){
                this.verificaAberto()
            }
        }
    }
}
</script>

<style>

</style>
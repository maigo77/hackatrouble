<template>
  <div class="mobile-content" id="confirmar-resid">
      <div class="logo-header">
        <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
      </div>
      <div class="modal">
          <div class="titulo-confirmar-resid">
              <h2> Olá {{ nome }},  </h2>
          </div>
          <div class="textos-confirmar-resid">
              <p> Por favor, confirme seu local de residência </p>
              <input type="text" placeholder="CEP: ">
              <input type="text" placeholder="Cidade: ">
              <input type="text" placeholder="Logradouro: ">
              <input type="text" placeholder="Bairro: ">
              <input type="text" placeholder="Número: ">
              <div class="btn-secundario-duplo">
                <router-link to="/telaInicial"> 
                    <div class="btn-secundario">Confirmar</div>
                </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            nome: ''
        }
    },
    methods:{
        setNome(){
            if(this.tipoPerfil == 'voluntario'){
                this.nome = this.objVoluntario.nome
            }else if(this.tipoPerfil == 'necessitado'){
                this.nome = this.objNecessitado.nome
            }else{
                window.location.hash = '/'
            }
        }
    },
    computed: {
        ...mapGetters({
            tipoPerfil: 'getTipoPerfil',
            objVoluntario: 'getObjVoluntario',
            objNecessitado: 'getObjNecessitado'
        })
    },
    mounted(){
        this.setNome()
    }
}
</script>

<style>

</style>
<template>
  <div class="mobile-content" id="validar-conta">
      <div class="logo-header">
        <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
      </div>
      <div class="modal">
          <div class="titulo-validar">
              <h2> Agora só falta validar a conta </h2>
          </div>
          <div class="validar-texto">
              <p> Por favor, insira o código de segurança que você receberá no celular que foi cadastrado </p>
              <div class="inputs-validar">
                 <input type="text" maxlength="1">
                 <input type="text" maxlength="1">
                 <input type="text" maxlength="1">
                 <input type="text" maxlength="1">
                 <input type="text" maxlength="1">
                 <input type="text" maxlength="1">
              </div>
              <div class="btn-validar">
                  <template v-if="tipoPerfil == 'comerciante'">
                    <router-link to="/telaInicial" class="link link-secundario">
                        <div class="btn-secundario">
                            <p> Validar </p>
                        </div>
                    </router-link>
                  </template>
                  <template else>
                    <router-link to="/confirmarResidencia" class="link link-secundario">
                        <div class="btn-secundario">
                            <p> Validar </p>
                        </div>
                    </router-link>
                  </template>
              </div>
              <p>
                  Ainda não recebeu o código?
                  <a href="#"> Clique aqui para enviar novamente </a> 
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters({
            'tipoPerfil': 'getTipoPerfil'
        })
    },
    methods: {
        verificarPerfil(){
            if(this.tipoPerfil == ''){
                window.location.hash = '/'
            }
        }
    },
    mounted(){
        this.verificarPerfil()
    }
}
</script>

<style>

</style>
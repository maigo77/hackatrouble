<template>
  <div class="mobile-content" id="tipos-perfis">
      <div class="logo-header">
        <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
      </div>
      <div class="modal">
          <div class="titulo-tipo-perfis">
              <h2> Selecione seu perfil </h2>
          </div>
          <div class="btns">
              <div class="btn-container">
                <div v-on:click="tipoPerfil('necessitado')">
                  <router-link to="/formularioPessoa" class="link"> 
                      <div class="btn"> Necessitado </div>
                  </router-link>
                </div>
              </div>
              <div class="btn-container">
                <div v-on:click="tipoPerfil('voluntario')">
                  <router-link to="/formularioPessoa" class="link"> 
                      <div class="btn"> Voluntário </div>
                  </router-link>
                </div>
              </div>
              <div class="btn-container">
                <div v-on:click="tipoPerfil('comerciante')">
                  <router-link to="/formularioJuridica" class="link"> 
                      <div class="btn"> Comerciante </div>
                  </router-link>                  
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setTipoPerfil']),
    tipoPerfil(tipo){
      this.setTipoPerfil(tipo)
    }
  }
}
</script>
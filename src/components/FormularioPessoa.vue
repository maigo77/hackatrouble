<template>
  <div class="mobile-content formularios" id="formulario-pessoa">
      <div class="logo-header">
        <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
      </div>
      <div class="modal">
          <div class="titulo-formulario">
              <h2> Agora só precisamos de algumas informações.. </h2>
          </div>
          <div class="campos-formulario">
              <input type="text" placeholder="Nome: " v-model="nome">
              <input type="text" placeholder="Sobrenome: " v-model="sobrenome">
              <input type="text" placeholder="CPF: " v-model="cpf">
              <input type="tel" placeholder="Telefone/Celular: " v-model="telefone">
              <input type="email" placeholder="Email: " v-model="email">
              <input type="password" placeholder="Senha: " v-model="senha">
              <input type="password" placeholder="Confirme sua Senha: " v-model="confirmaSenha">
          </div>
      </div>
      <div class="confirmar-dados">
          <p> Ao confirmar você aceita os <a href="#">Termos de Uso e Política de Privacidade </a> </p>
          <div class="btn-container">
              <div class="btn" v-on:click="montaObjPessoa()"> Confirmar </div>
          </div>
          <div class="d-none" v-if="gerou">
            <router-link to="/validarConta" id="redirecionar-valida">
              Redirecionar 
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      nome: '',
      sobrenome: '',
      cpf: '',
      telefone: '',
      email: '',
      senha: '',
      confirmaSenha: '',
      gerou: false
    }
  },
  methods: {
    ...mapMutations(["setObjVoluntario", "setObjNecessitado"]),

    montaObjPessoa(){
      if(this.validaCampos()){
        
        let obj = {
          tipoPerfil: this.tipoPerfil,
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          telefone: this.telefone,
          email: this.email,
          senha: this.senha
        }

        switch (this.tipoPerfil){
          case 'necessitado':
            this.setObjNecessitado(obj)
          break;
          case 'voluntario':
            this.setObjVoluntario(obj)
          break;
        }

        this.gerou = true

        setTimeout(
          () => {
            document.querySelector('#redirecionar-valida').click()    
          }, 500
        )

      }
    },

    validaCampos(){
      if(this.nome !== '' && this.sobrenome !== '' && this.cpf !== '' && this.telefone !== '' && this.email !== '' && this.senha !== '' && this.confirmaSenha !== ''){
        return true
      }else{
        return false
      }
    }
  },
  computed: {
    ...mapGetters({
      tipoPerfil: 'getTipoPerfil'
    })
  }
}
</script>

<style>

</style>
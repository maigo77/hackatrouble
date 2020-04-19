<template>
  <div class="mobile-content" id="perfil">
    <div class="logo-header">
        <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
    </div>
    <div class="modal">
        <div class="titulo-perfil">
            <h2> Acesse sua Conta </h2>
        </div>
        <div class="acesso-perfil">
            <input type="email" placeholder="Email: " v-model="email">
            <input type="password" placeholder="Senha: " v-model="senha">
        </div>
    </div>
    <div class="btn-container">
        <router-link to="/" class="link"> 
            <div class="btn"> Entrar </div>
        </router-link> 
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            senha: ''
        }
    }
}
</script>

<style>

</style>
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
              <input type="text" placeholder="Nome Completo: ">
              <input type="text" placeholder="Razão Social: ">
              <input type="text" placeholder="CNPJ: ">
              <input type="tel" placeholder="Celular : ">
              <input type="tel" placeholder="Telefone/Celular 2: ">
              <input type="email" placeholder="Email: ">
              <input type="password" placeholder="Senha: ">
              <input type="password" placeholder="Confirme sua Senha: ">
          </div>
      </div>
      <div class="confirmar-dados">
          <p> Ao confirmar você aceita os <a href="#">Termos de Uso e Política de Privacidade </a> </p>
          <div class="btn-container">
            <router-link to="/validarConta" class="link"> 
                <div class="btn"> Confirmar </div>
            </router-link>                  
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="mobile-content" id="aceite-localizacao">
      <div class="logo-header">
            <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
        </div>
      <div class="modal">
          <div class="titulo-aceite">
              <h2> Vamos criar uma conta juntos! </h2>
          </div>
          <div class="textos-aceite">
              <p> 
                Primeiro vamos precisar confirmar sua localização 
             </p>
              <p>
                  Clique em PERMITIR para concordar em compartilhar sua localização.
              </p>
          </div>
          <div class="btn-secundario-duplo">
              <router-link to="/" class="link link-secundario">
                <div class="btn-secundario">
                    <p> Recusar </p>
                </div>
              </router-link>
              <router-link to="/tiposPerfis" class="link link-secundario">
                <div class="btn-secundario">
                    <p> Permitir </p>
                </div>
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
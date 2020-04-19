<template>
  <div class="mobile-content telas-iniciais">
      <div class="container-telas">
        <div class="cabecalho-telas">
          <div class="menu-hamburguer">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2> Olá, {{ objNecessitado.nome }} </h2>
          <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
        </div>
        <div class="barra-pesquisa">
            <input type="text" placeholder="O que você precisa hoje?">
        </div>
        <div class="container-opcoes-produtos">
          <div class="opcoes-produtos">
            <div class="btn-opcoes-produtos">Alimentos</div>
            <div class="btn-opcoes-produtos">Saúde</div>
          </div>
          <div class="opcoes-produtos">
            <div class="btn-opcoes-produtos">Beleza</div>
            <div class="btn-opcoes-produtos">Outros</div>
          </div>
        </div>
        <div class="imagens-produtos">
          <div class="produto">
            <img src="../../public/assets/img/mercado.jpg" alt="Cesta de Compras">
            Mercado
          </div>
          <div class="produto">
            <img src="../../public/assets/img/quitanda.jpg" alt="Quitanda">
            Quitanda
          </div>
        </div>
        <div class="imagens-produtos">
          <div class="produto">
            <img src="../../public/assets/img/perfumaria.jpg" alt="Perfumaria">
            Perfumaria
          </div>
          <div class="produto">
            <img src="../../public/assets/img/farmacia.jpeg" alt="Farmácia">
            Farmácia
          </div>
        </div>
        <div class="rodape-telas">
          <div class="menu-hamburguer">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>icone casa</p>
          <p>icone lupa</p>
          <!-- <p>icone voltar</p> -->
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      objNecessitado: 'getObjNecessitado'
    })
  }
}
</script>

<style>

</style>
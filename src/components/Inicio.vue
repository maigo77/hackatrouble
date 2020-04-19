<template>
    <div class="mobile-content" id="inicio">
        <div class="logo-header">
            <img src="../../public/assets/img/logo_conecta_2_v2.png" alt="Logo Conecta">
        </div>
        <div class="modal modal-inicio">
            <div class="titulo-inicio">
                <h2> Bem-vindo ao Conecta! </h2>
            </div>
            <div class="texto-inicio">
                <p>
                    Uma plataforma que busca conectar o mercadinho do seu Zé até você, sem sair
                    de casa!
                </p>
                <p> Você é novo por aqui? </p>
                <div>
                    <p> Clique em </p>
                    <router-link to="/aceiteLocalizacao" class="link link-secundario">
                        <div class="btn-secundario btn-inicio-sou-novo">
                            <p> Sou novo </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <router-link to="/login" class="link"> 
                <div class="btn">
                    <p> Entrar </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>
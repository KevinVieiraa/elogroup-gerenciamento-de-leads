<!--
    Botao para ser utilizado em uma ação que se deseja destacar
    por exemplo, a opção "Cadastrar" no formulário de cadastro.
-->

<template>
    <div class="container-botao">
        <input type="submit" class="botao" :value="texto_botao">
    </div>
</template>

<script>
    export default {
        name: 'BotaoPrincipal',
        props: {
            texto_botao: String
        }
    }
</script>

<style scoped>
    .container-botao {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .botao {
        background-color: #14202C;
        border: 2px solid #14202C;
        border-radius: 2px;
        color: white;
        height: 50px;
        margin: 0 auto;
        font-size: 16px;
        cursor: pointer;
        transition: 0.5s;
    }

    .botao:hover {
        background-color: transparent;
        color: #14202C;
    }

    input{
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        font-size: 16px;
    }
</style>
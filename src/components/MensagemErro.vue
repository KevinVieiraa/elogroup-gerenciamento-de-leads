<!--
    Componente que encapsula uma mensagem de erro estilizada.
    Foi utilizada em todas as partes onde uma mensagem de erro 
    deveria ser exibida: no login, cadastro de usuario, e no 
    cadastro de leads.
-->

<template>
    <div class="container-mensagem">
        <p>{{ mensagem }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MensagemErro',
        props: {
            mensagem: String
        } 
    }
</script>

<style scoped>
    .container-mensagem {
        color: #c02525;
        background-color: #ffcccc;
        border: 1px solid #ffb8b8;
        border-radius: 1px;
        padding: 6px;
        margin-bottom: 2px;
        width: 100%;
        font-size: 12px;
    }
</style>
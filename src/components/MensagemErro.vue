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
    }
</style>
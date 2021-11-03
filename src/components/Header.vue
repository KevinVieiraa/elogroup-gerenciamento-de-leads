<template>
    <div id="header-gerenciamento">
        <router-link to="/" id="logo-url">
            <img src="/imagens/logo.jpg" alt="" id="logo">
        </router-link>

        <div>
            <router-link to="/">
                <h1>Olá {{ nome_usuario }}, <a @click="desconectar">Desconectar</a></h1>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Armazenamento from '../controllers/Armazenamento';

    export default {
        name: 'Header',
        data() {
            return {
                nome_usuario: ''
            }
        },
        components: {
            Armazenamento
        },
        methods: {
            desconectar() {
                console.log("Clicou em desconectar.")
                Armazenamento.DeslogarUsuario();
                this.$router.replace('/login');
            }
        },
        mounted() {
            this.nome_usuario = Armazenamento.NomeUsuarioLogado();
        }
    }
</script>

<style scoped>
    #header-gerenciamento {
        display: flex;
        justify-content: space-between;
        height: 60px;
		background-color: #171b1c;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
    }

    #header-gerenciamento img {
        height: 100%;
    }

    #header-gerenciamento div {
        display: flex;
        align-items: center;
    }

    #header-gerenciamento h1{
        text-decoration: none;
        margin-right: 15px;
        border: none;
        font-size: 15px;
        color: white;
        cursor: default;
    }

    #header-gerenciamento a{
        text-decoration: none;
        margin-right: 15px;
        border: none;
        color: rgb(100, 144, 153);
        cursor: pointer;
    }
</style>
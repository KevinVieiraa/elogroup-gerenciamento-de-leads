<template>
    <div id="header-gerenciamento">
        <router-link to="/" id="logo-url">
            <img src="/imagens/logo.jpg" alt="" id="logo">
        </router-link>

        <div>
            <router-link to="/">
                <a @click="desconectar">Desconectar</a>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Armazenamento from '../controllers/Armazenamento';

    export default {
        name: 'Header',
        props: ['url_logo', 'alt_logo'],
        components: {
            Armazenamento
        },
        methods: {
            desconectar() {
                console.log("Clicou em desconectar.")
                Armazenamento.DeslogarUsuario();
                this.$router.replace('/login');
            }
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

     #header-gerenciamento a{
        text-decoration: none;
        margin-right: 15px;
        border: none;
        color: white;
    }
</style>
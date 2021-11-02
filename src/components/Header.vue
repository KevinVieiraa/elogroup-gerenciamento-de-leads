<template>
    <div id="header-gerenciamento">
        <router-link to="/" id="logo-url">
        <img src="/imagens/logo.jpg" :alt="alt" id="logo">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['url_logo', 'alt_logo']
    }
</script>

<style scoped>
    #header-gerenciamento {
        height: 60px;
		background-color: #171b1c;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
    }

    #header-gerenciamento img {
        height: 100%;
    }
</style>
<template>
	<router-view/>
</template>

<script>
	import Header from './components/Header.vue';
	import Armazenamento from './controllers/Armazenamento'

	export default {
		components: {
			Header,
			Armazenamento
		},
		data() {
			return {
				url_logo: '/imagens/logo.png',
				alt_logo: 'Gerenciador de Leads'
			}
		},
		methods: {

		},
		beforeCreate() {
			Armazenamento.Inicializar();
		}
	}
</script>

<style>
	* {
		font-family: Helvetica;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	h1 {
		text-align: center;
		color: #222;
	}

	body {
		background-color: #e9e9e9;
	}

	.conteudo-forms {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 90vh;
	}

	::-webkit-scrollbar {
		width: 5px;
	}
	
	::-webkit-scrollbar-track {
		background: rgb(211, 211, 211);
		border-radius: 5px;
	}
	
	::-webkit-scrollbar-thumb {
		background: #c2c2c2;
		border-radius: 8px;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background: #a5a5a5;
	}
</style>

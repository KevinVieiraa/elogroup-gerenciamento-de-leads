<template>
	<router-view/>
</template>

<script>
	import Header from './components/Header.vue';
	import SincronizadorArmazenamento from './controllers/SincronizadorArmazenamento'

	export default {
		components: {
			Header
		},
		data() {
			return {
				url_logo: '/imagens/logo.png',
				alt_logo: 'Gerenciador de Leads'
			}
		},
		methods: {
			SincronizadorArmazenamento
		},
		mounted() {
			SincronizadorArmazenamento();
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

	.conteudo {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 90vh;
	}
</style>

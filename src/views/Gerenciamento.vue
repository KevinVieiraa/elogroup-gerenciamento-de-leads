<template>
	<div>
		<Header />
		<JanelaGerenciamento />
  	</div>
</template>

<script>
	import Header from '../components/Header.vue'
	import JanelaGerenciamento from '../components/JanelaGerenciamento.vue'

	export default {
		name: 'Gerenciamento',
		components: {
			Header,
			JanelaGerenciamento
		},
		beforeCreate() {
			document.title = "Painel - Gerenciamento de Leads"
		}
	}
</script>

<style scoped>
	
</style>
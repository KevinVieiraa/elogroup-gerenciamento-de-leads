<template>
	<Header />
	<div>
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
		}
	}
</script>

<style scoped>
	
</style>
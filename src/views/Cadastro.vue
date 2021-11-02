<template>
  	<div class="conteudo-forms">
		  <FormCadastro />
  	</div>
</template>

<script>
	import FormCadastroUsuario from '../components/FormCadastroUsuario.vue'

	export default {
		name: 'Cadastro',
		components: {
			FormCadastro
		}
	}
</script>
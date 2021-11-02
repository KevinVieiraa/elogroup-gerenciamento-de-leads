<template>
  	<div class="conteudo-forms">
		  <FormCadastroUsuario />
  	</div>
</template>

<script>
	import FormCadastroUsuario from '../components/FormCadastroUsuario.vue'

	export default {
		name: 'Cadastro',
		components: {
			FormCadastroUsuario
		}
	}
</script>
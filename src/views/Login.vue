<template>
  	<div class="conteudo-forms">
		  <FormLogin />
  	</div>
</template>

<script>
	import FormLogin from '../components/FormLogin.vue'

	export default {
		name: 'Login',
		components: {
			FormLogin
		}
	}
</script>
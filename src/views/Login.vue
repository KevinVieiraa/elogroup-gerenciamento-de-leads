<template>
  	<div class="conteudo">
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
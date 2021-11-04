<!--
    Componente que encapsula um input de texto/senha e os
    estilos definidos, podendo ser utilizado em diferentes
    formulários.
-->

<template>
    <div class="container-input">
        <label for="nome_input">{{ texto_label }}</label>
        <input  :type="tipo_input" 
                :id="nome_input" 
                :name="nome_input" 
                v-model="conteudo_input" 
                @input="mudarConteudoInput(conteudo_input)" 
                placeholder="" 
                autocomplete="off" 
                required 
                oninvalid="this.setCustomValidity('')" 
                oninput="this.setCustomValidity('')">
    </div>
</template>

<script>
    export default {
        name: 'InputTexto',
        props: {
            texto_label: String,
            tipo_input: String,
            conteudo_input: String,
            nome_input: String
        },
        emits: ['update:conteudo_input'],
        methods: {
            //Sincroniza o conteudo do componente para o pai que estiver usando ele.
            mudarConteudoInput(conteudo) {
                this.$emit('update:conteudo_input', conteudo);
            }
        }
    }
</script>

<style scoped>
    .container-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    input{
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        font-size: 16px;
    }

    input[type=text], input[type=password] {
        border: none;
        border-bottom: 0.001em solid #8693a0;
    }

    input[type=text]:focus, input[type=password]:focus {
        outline: none;
    }

    label {
        font-weight: 600;
        margin-bottom: 5px;
        color: #14202c;
        padding: 0 5px;
    }
</style>
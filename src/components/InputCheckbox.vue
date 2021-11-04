<!--
    Componente que encapsula o input do tipo checkbox e os
    estilos definidos, podendo ser utilizado em diferentes
    formulários.
-->

<template>
    <div class="container-checkbox">
        <input type="checkbox" :name="nome_input" :id="nome_input" v-model="conteudo_input" @change="mudarConteudoInput(conteudo_input)" >
        <label :for="nome_input">{{ texto_label }}</label>
    </div>
</template>

<script>
    export default {
        name: 'InputTexto',
        props: {
            texto_label: String,
            conteudo_input: false,
            nome_input: String
        },
        emits: ['update:conteudo_input', 'valorAlterado'],
        methods: {
            //Sincroniza o conteudo do componente para o pai que estiver usando ele.
            mudarConteudoInput(conteudo) {
                setTimeout(() => {
                    console.log("Emitindo valor do input: " + this.conteudo_input);
                    this.$emit('update:conteudo_input', conteudo);
                    this.$emit('valorAlterado');
                }, 0);
            }
        }
    }
</script>

<style scoped>
    .container-checkbox {
        display: flex;
        margin-bottom: 10px;
    }

    .container-checkbox label{
        text-align: center;
        justify-items: center;
        margin: auto 0;
        margin-left: 5px;
        font-size: 16px;
    }

    input[type=checkbox] {
        width: 20px;
        height: 20px;
    }
</style>
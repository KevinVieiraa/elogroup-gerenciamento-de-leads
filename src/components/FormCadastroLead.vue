<template>
    <div>
        <JanelaFlutuante v-show="true" @fechar="fecharJanela">
            <template v-slot:conteudo>
                <div id="conteudo-cadastro-lead">
                    <div id="titulo-cadastro">
                        <h1>Novo Lead</h1>
                    </div>
                    <form id="form-cadastro-lead" @submit="tentarAutenticar">
                        <div class="container-input">
                            <label for="usuario">Nome*</label>
                            <input type="text" id="usuario" name="usuario" v-model="input_nome_cliente" placeholder="" required oninvalid="this.setCustomValidity('Insira nome do cliente aqui')" oninput="this.setCustomValidity('')">
                        </div>
                        <div class="container-input">
                            <label for="usuario">Telefone*</label>
                            <input type="text" id="usuario" name="usuario" v-model="input_telefone_cliente" placeholder="" required oninvalid="this.setCustomValidity('Insira o telefone do cliente aqui')" oninput="this.setCustomValidity('')">
                        </div>
                        <div class="container-input">
                            <label for="usuario">Email*</label>
                            <input type="text" id="usuario" name="usuario" v-model="input_email_cliente" placeholder="" required oninvalid="this.setCustomValidity('Insira o email do cliente aqui')" oninput="this.setCustomValidity('')">
                        </div>

                        <br>
                        <label >Oportunidades*</label>
                        <br>
                        <div class="container-checkbox">
                            <input type="checkbox" name="todos" id="todos">
                            <label for="todos">Todos</label>
                        </div>
                        <div class="container-checkbox">
                            <input type="checkbox" name="RPA" id="rpa" v-model="oportunidade_rpa">
                            <label for="rpa">RPA</label>
                        </div>
                        <div class="container-checkbox">
                            <input type="checkbox" name="Produto Digital" id="produto_digital" v-model="oportunidade_produto_digital">
                            <label for="produto_digital">Produto Digital</label>
                        </div>
                        <div class="container-checkbox">
                            <input type="checkbox" name="Analytics" id="analytics" v-model="oportunidade_analytics">
                            <label for="analytics">Analytics</label>
                        </div>
                        <div class="container-checkbox">
                            <input type="checkbox" name="BPM" id="bpm" v-model="oportunidade_bpm">
                            <label for="bpm">BPM</label>
                        </div>

                        <div id="container-botao-salvar-lead">
                            <BotaoPrincipal texto_botao="Salvar" />
                        </div>
                    </form>
                </div>
            </template>
        </JanelaFlutuante>
    </div>
</template>

<script>
    import JanelaFlutuante from './JanelaFlutuante.vue';
    import BotaoPrincipal from './BotaoPrincipal.vue';

    export default {
        name: 'FormCadastroLead',
        data() {
            return {
                input_nome_cliente: "",
                input_telefone_cliente: "",
                input_email_cliente: "",
                oportunidade_rpa: false,
                oportunidade_produto_digital: false,
                oportunidade_analytics: false,
                oportunidade_bpm: false
            }
        },
        components: {
            JanelaFlutuante,
            BotaoPrincipal
        },
        methods: {
            fecharJanela() {
                this.$emit('fechar');
                this.input_nome_cliente = "";
                this.input_telefone_cliente = "";
                this.input_email_cliente = "";
                this.oportunidade_rpa = false;
                this.oportunidade_produto_digital = false;
                this.oportunidade_analytics = false;
                this.oportunidade_bpm = false;
            }
        }
    }
</script>

<style scoped>
    #titulo-cadastro {
        height: 8%;
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
        border: none;
        border-bottom: 0.001em solid rgb(207, 207, 207);
    }

    #conteudo-cadastro-lead {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0 auto;
    }

    #form-cadastro-lead {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 35px 45px;
        padding-bottom: 0px;
    }
    
    #container-botao-salvar-lead {
        margin-top: 20px;
        justify-content: center;
    }
    
    .container-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

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

    input{
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        font-size: 16px;
    }

    input[type=text] {
        border: none;
        border-bottom: 0.001em solid #8693a0;
    }

    input[type=text]:focus {
        outline: none;
    }
</style>
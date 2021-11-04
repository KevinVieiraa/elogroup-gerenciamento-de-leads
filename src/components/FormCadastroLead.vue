<!--
    Componente do formulário de cadastro de um Lead. 
    Possui vários componentes de checkbox e inputs de texto e um
    componente de janela flutuante, que é a mensagem de confirmação
    após um cadastro ser concluido com sucesso.
-->

<template>
    <div>
        <JanelaFlutuante v-show="true" @fechar="fecharJanela">
            <template v-slot:conteudo>
                <div id="conteudo-cadastro-lead">
                    <div id="titulo-cadastro">
                        <h1>Novo Lead</h1>
                    </div>

                    <form id="form-cadastro-lead" @submit="cadastrarLead">
                        <div id="container-inputs">
                            <div id="container-inputs-texto">
                                <InputTexto texto_label="Nome*" tipo_input="text" nome_input="nome" v-model:conteudo_input="input_nome_cliente" />
                                <InputTexto texto_label="Telefone*" tipo_input="text" nome_input="telefone" v-model:conteudo_input="input_telefone_cliente" />
                                <InputTexto texto_label="Email*" tipo_input="text" nome_input="email" v-model:conteudo_input="input_email_cliente" />
                            </div>
                            <br>
                            <div id="container-checkboxes">
                                <h1>Oportunidades*</h1>
                                <InputCheckbox texto_label="Todos" nome_input="todos" v-model:conteudo_input="oportunidade_todos" @valorAlterado="marcarTodos"/>
                                <InputCheckbox texto_label="Analytics" nome_input="analytics" v-model:conteudo_input="oportunidade_analytics" @valorAlterado="atualizarCheckboxtodos"/>
                                <InputCheckbox texto_label="BPM" nome_input="bpm" v-model:conteudo_input="oportunidade_bpm" @valorAlterado="atualizarCheckboxtodos"/>
                                <InputCheckbox texto_label="Produto Digital" nome_input="produto_digital" v-model:conteudo_input="oportunidade_produto_digital" @valorAlterado="atualizarCheckboxtodos"/>
                                <InputCheckbox texto_label="RPA" nome_input="rpa" v-model:conteudo_input="oportunidade_rpa" @valorAlterado="atualizarCheckboxtodos"/>
                            </div>
                        </div>
                        <br>
                        <MensagemErro :mensagem="mensagem_erro_cadastro" v-show="mensagem_erro_cadastro" />

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
    import MensagemErro from './MensagemErro.vue';
    import AutenticadorCadastroLead from '../controllers/AutenticadorCadastroLead';
    import Armazenamento from '../controllers/Armazenamento';
    import InputTexto from './InputTexto.vue';
    import InputCheckbox from './InputCheckbox.vue';

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
                oportunidade_bpm: false,
                oportunidade_todos: false,
                mensagem_erro_cadastro: '',
            }
        },
        components: {
            JanelaFlutuante,
            MensagemErro,
            BotaoPrincipal,
            AutenticadorCadastroLead,
            Armazenamento,
            InputTexto,
            InputCheckbox
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
            },
            marcarTodos() {
                //Atraso para executar a logica. Precisa desse tempo para o valor do checkbox atualizar na variavel
                setTimeout(() => {
                    this.oportunidade_rpa = this.oportunidade_todos;
                    this.oportunidade_produto_digital = this.oportunidade_todos;
                    this.oportunidade_analytics = this.oportunidade_todos;
                    this.oportunidade_bpm = this.oportunidade_todos;
                }, 0);
            },
            atualizarCheckboxtodos() {
                setTimeout(() => {
                    this.oportunidade_todos = (this.oportunidade_rpa && this.oportunidade_produto_digital && this.oportunidade_analytics && this.oportunidade_bpm);
                }, 0);
            },
            async cadastrarLead(evento) {
                evento.preventDefault();
                const resposta = await AutenticadorCadastroLead(
                    this.input_nome_cliente, 
                    this.input_telefone_cliente, 
                    this.input_email_cliente, 
                    this.oportunidade_rpa, 
                    this.oportunidade_produto_digital, 
                    this.oportunidade_analytics, 
                    this.oportunidade_bpm
                );

                this.mensagem_erro_cadastro = resposta.mensagem_erro;
                if(resposta.foi_cadastrado) {
                    console.log("Usuario cadastrado");
                    this.$emit('cadastrado');
                    //Limpa os inputs
                    this.input_nome_cliente = "";
                    this.input_telefone_cliente = "";
                    this.input_email_cliente = "";
                    this.oportunidade_rpa = false;
                    this.oportunidade_produto_digital = false;
                    this.oportunidade_analytics = false;
                    this.oportunidade_bpm = false;
                    this.oportunidade_todos = false;
                    this.fecharJanela();
                }
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
        padding-bottom: 15px;
        border: none;
        border-bottom: 0.001em solid rgb(207, 207, 207);
    }

    #conteudo-cadastro-lead {
        width: 650px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }

    #form-cadastro-lead {
        width: 100%;
        padding: 35px 45px;
        padding-bottom: 0px;
    }
    
    #container-botao-salvar-lead {
        width: 200px;
        margin: 0 auto;
        margin-top: 20px;
    }

    #container-inputs {
        display: flex;
        align-items: flex-start;
        
        justify-content: space-around;
    }

    #container-inputs-texto {
        width: 55%;
        margin-right: 40px;
    }

    #container-checkboxes h1 {
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #14202c;
    }

    #container-checkboxes {
        width: 45%;
        align-items: flex-end;
        margin-left: 40px;
    }
    
</style>
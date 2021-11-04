<!--
    Componente de formulário de cadastro de um usuário.
    Possui componentes de inputs de texto e senha.
-->

<template>
    <div>
        <div id="janela-login">
            <img src="/imagens/logo.jpg" alt="">
            <form id="form-login" @submit="tentarCadastrar">
                <InputTexto texto_label="Usuário*" tipo_input="text" nome_input="usuario" v-model:conteudo_input="input_usuario" />
                <InputTexto texto_label="Senha*" tipo_input="password" nome_input="senha" v-model:conteudo_input="input_senha" />
                <InputTexto texto_label="Confirme a Senha*" tipo_input="password" nome_input="confirmacao_senha" v-model:conteudo_input="input_confirmacao_senha" />
                <MensagemErro :mensagem="mensagem_erro_cadastro" v-show="mensagem_erro_cadastro" />
                <br>
                <BotaoPrincipal texto_botao="Cadastrar-se" />
            </form>
            <h2>ou <a href="/">entrar</a></h2>
        </div>
    </div>
</template>

<script>
    import MensagemErro from './MensagemErro.vue';
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import InputTexto from './InputTexto.vue';
    import AutenticadorCadastro from '../controllers/AutenticadorCadastro'
    import Armazenamento from '../controllers/Armazenamento';
    
    export default {
        name: 'FormCadastroUsuario',
        data() {
            return{
                input_usuario: "",
                input_senha: "",
                input_confirmacao_senha: "",
                mensagem_erro_cadastro: ""
            }
        },
        components: {
            BotaoPrincipal,
            InputTexto,
            MensagemErro,
            Armazenamento
        },
        methods: {
            AutenticadorCadastro,
            async tentarCadastrar(e) {
                e.preventDefault();
                const res = await AutenticadorCadastro(this.input_usuario, this.input_senha, this.input_confirmacao_senha);

                this.mensagem_erro_cadastro = res.mensagem_erro;

                if(res.foi_cadastrado) {
                    this.input_usuario = '';
                    this.input_senha = '';
                    this.input_confirmacao_senha = '';

                    this.$router.replace('/gerenciamento');
                }
            }
        },
        beforeCreate() {
            if(Armazenamento.UsuarioEstaLogado()) {
                this.$router.replace('/gerenciamento');
            }
        }
    }
</script>

<style scoped>
    #janela-login {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0 auto;
        background-color: #fefefe;
        border-radius: 2px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
    }

    #form-login {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 35px 45px;
        padding-bottom: 0px;
    }

    #janela-login h2 {
        text-align: center;
        font-size: 18px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 20px;
    }

    #janela-login h2 a {
        text-decoration: none;
        font-weight: bold;
        color: #1822dc;
    }

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
<!--
    Componente de formulário de autenticação e login de um usuário.
    Possui componentes de input de texto e senha.
-->

<template>
    <div>
        <div id="janela-login">
            <img src="/imagens/logo.jpg" alt="">
            <form id="form-login" @submit="tentarAutenticar">
                <InputTexto texto_label="Usuário" tipo_input="text" nome_input="usuario" v-model:conteudo_input="input_usuario" />
                <InputTexto texto_label="Senha" tipo_input="password" nome_input="senha_login" v-model:conteudo_input="input_senha" />
                <MensagemErro :mensagem="mensagem_erro_login" v-show="mensagem_erro_login" />
                <br>
                <BotaoPrincipal texto_botao="Entrar" />
            </form>
            <h2>ou <a href="/cadastro">cadastre-se</a></h2>
        </div>
    </div>
</template>

<script>
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import InputTexto from './InputTexto.vue';
    import MensagemErro from './MensagemErro.vue';
    import AutenticadorLogin from '../controllers/AutenticadorLogin';
    import Armazenamento from '../controllers/Armazenamento';

    export default {
        name: 'FormLogin',
        data() {
            return{
                input_usuario: "",
                input_senha: "",
                mensagem_erro_login: "",
            }
        },
        components: {
            BotaoPrincipal,
            InputTexto,
            MensagemErro,
            Armazenamento
        },
        methods: {
            AutenticadorLogin,
            async tentarAutenticar(evento) {
                evento.preventDefault();
                const resposta = await AutenticadorLogin(this.input_usuario, this.input_senha);

                //Atualiza a mensagem de erro caso haja alguma
                this.mensagem_erro_login = resposta.mensagem_erro;

                if(resposta.foi_autenticado) {
                    //Redireciona para a pagina de gerenciamento
                    this.$router.replace('/gerenciamento');
                }
            }
        },
        beforeCreate() {
            if(Armazenamento.UsuarioEstaLogado()) {
                //Redireciona para a pagina de gerenciamento caso haja uma tentativa de acesso já estando logado
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
</style>
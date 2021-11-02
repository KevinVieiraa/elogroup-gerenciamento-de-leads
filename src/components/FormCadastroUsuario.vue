<template>
    <div>
        <div id="janela-login">
            <img src="/imagens/logo.jpg" alt="">
            <form id="form-login" @submit="tentarCadastrar">
                <div class="container-input">
                    <label for="usuario">Usuário*</label>
                    <input type="text" id="usuario" name="usuario" v-model="input_usuario" placeholder="" required oninvalid="this.setCustomValidity('Insira seu usuário aqui')" oninput="this.setCustomValidity('')">
                </div>
                <div class="container-input">
                    <label for="senha">Senha*</label>
                    <input type="password" id="senha" name="senha" v-model="input_senha" placeholder="" required oninvalid="this.setCustomValidity('Insira sua senha aqui')" oninput="this.setCustomValidity('')">
                </div>
                <div class="container-input">
                    <label for="senha">Confirme a Senha*</label>
                    <input type="password" id="confirmacao_senha" name="confirmacao_senha" v-model="input_confirmacao_senha" placeholder="" required oninvalid="this.setCustomValidity('Repita sua senha aqui')" oninput="this.setCustomValidity('')">
                </div>
                <MensagemErro :mensagem="mensagem_erro_cadastro" v-show="mensagem_erro_cadastro" />
                <!--<div class="container-input">
                    <input type="submit" class="botao-cadastrar" value="Cadastrar-se">
                </div>-->
                <BotaoPrincipal texto_botao="Cadastrar-se" />
            </form>
            <h2>ou <a href="/">entrar</a></h2>
        </div>
    </div>
</template>

<script>
    import MensagemErro from './MensagemErro.vue';
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import AutenticadorCadastro from '../controllers/AutenticadorCadastro'

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
            MensagemErro
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
                }
                //Enviar resposta para o pai como autenticado = true
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
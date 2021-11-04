import Armazenamento from '../Armazenamento'

/* 
    Módulo responsável pela verificação de autenticação de um login.
    Recebe os parâmetros do formulário de login, verifica se as
    credenciais existem no banco de dados (localstorage) e retorna
    uma resposta

    A resposta é um objeto contendo uma mensagem, em caso de erro,
    e a confirmação se foi autenticado.
*/
export default function(input_usuario, input_senha) {
    let resposta = {
        mensagem_erro: '',
        foi_autenticado: false
    };

    let usuario_encontrado = Armazenamento.EncontrarUsuarioCadastrado(input_usuario, input_senha);
    if(!usuario_encontrado) {
        resposta.mensagem_erro = 'Usuário ou senha incorretos';
    }
    else {
        resposta.foi_autenticado = true;
        Armazenamento.LogarUsuario(usuario_encontrado);
    }

    return resposta;
}
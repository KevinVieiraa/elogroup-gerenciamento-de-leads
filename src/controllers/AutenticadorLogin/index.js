import Armazenamento from '../Armazenamento'

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
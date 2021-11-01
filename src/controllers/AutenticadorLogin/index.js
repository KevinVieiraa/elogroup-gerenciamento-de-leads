export default function(input_usuario, input_senha) {
    let resposta = {
        mensagem_erro: '',
        foi_autenticado: false
    };

    let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let usuario_encontrado = dados_usuarios.find(usuario => usuario.usuario === input_usuario);
    if(usuario_encontrado) {
        //Verificar se a senha esta correta
        if(usuario_encontrado.senha == input_senha) {
            resposta.foi_autenticado = true;
        }
        else {
            resposta.mensagem_erro = 'Usuário ou senha incorretos';
        }
    }
    else {
        resposta.mensagem_erro = 'Usuário ou senha incorretos';
    }


    return resposta;
}
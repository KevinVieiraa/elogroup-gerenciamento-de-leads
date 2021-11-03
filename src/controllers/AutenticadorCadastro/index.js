import Armazenamento from '../Armazenamento'

export default function(input_usuario, input_senha, input_confirmacao_senha) {
    let resposta = {
        mensagem_erro: '',
        foi_cadastrado: false
    };

    const regex_senha = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%&*^~*+-_.]).{8,}/

    //Verifica se a senha obedece os pre requisitos
    if(regex_senha.test(input_senha)) {
        if(input_senha == input_confirmacao_senha) {
            //Verifica se ja foi criado um usuario igual
            let usuario_encontrado = Armazenamento.EncontrarIdUsuario(input_usuario);
            if(!usuario_encontrado) {
                let usuario = Armazenamento.CadastraNovoUsuario(input_usuario, input_senha);
                Armazenamento.LogarUsuario(usuario);
                resposta.foi_cadastrado = true;
            }
            else {
                resposta.mensagem_erro = 'Usuário já cadastrado.';
            }
        }
        else {
            resposta.mensagem_erro = 'Confirmação de senha deve ser igual à senha.';
        }
    }
    else {
        resposta.mensagem_erro = 'A senha deve possuir ao menos 8 caracteres, ao menos um caracter especial (!@#$%&*), um número (0-9) e uma letra.';
    }

    
    return resposta;
}
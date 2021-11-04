import Armazenamento from '../Armazenamento'

/* 
    Módulo responsável pelo controle do cadastro de usuários.
    Recebe os parâmetros do formulário de cadastro, verifica os
    requisitos necessários e retorna a resposta.

    A resposta é um objeto contendo uma mensagem, em caso de erro,
    e a confirmação se foi cadastrado.
*/
export default function(input_usuario, input_senha, input_confirmacao_senha) {
    let resposta = {
        mensagem_erro: '',
        foi_cadastrado: false
    };

    const regex_senha = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    //Busca se ja existe um usuário com o nome inserido
    let usuario_encontrado = Armazenamento.EncontrarIdUsuario(input_usuario);
    if(!usuario_encontrado) {
        if(regex_senha.test(input_senha)) {
            if(input_senha == input_confirmacao_senha) {
                let usuario = Armazenamento.CadastraNovoUsuario(input_usuario, input_senha);
                Armazenamento.LogarUsuario(usuario);
                resposta.foi_cadastrado = true;
            }
            else {
                resposta.mensagem_erro = 'Confirmação de senha deve ser igual à senha.';
            }
        }
        else {
            resposta.mensagem_erro = 'A senha deve possuir ao menos 8 caracteres, ao menos um caracter especial (!@#$%&*), um número (0-9) e uma letra.';
        }
    }
    else {
        resposta.mensagem_erro = 'Usuário já cadastrado.';
    }

    return resposta;
}
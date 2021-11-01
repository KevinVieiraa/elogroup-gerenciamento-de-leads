export default function(input_usuario, input_senha, input_confirmacao_senha) {
    let resposta = {
        mensagem_erro: '',
        foi_cadastrado: false
    };

    const regex_senha = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%&*^~*+-]).{8,}/

    //Verifica se a senha obedece os pre requisitos
    if(regex_senha.test(input_senha)) {
        if(input_senha == input_confirmacao_senha) {
            let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));

            //Verifica se ja foi criado um usuario igual
            let usuario_encontrado = dados_usuarios.find(usuario => usuario.usuario === input_usuario);
            if(!usuario_encontrado) {
                dados_usuarios.push({
                    usuario: input_usuario,
                    senha: input_senha,
                    leads_cadastrados: []
                })

                localStorage.setItem('usuarios', JSON.stringify(dados_usuarios));
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
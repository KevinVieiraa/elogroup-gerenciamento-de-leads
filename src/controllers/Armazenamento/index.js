const funcoes = {
    Inicializar() {
        //Criação dos usuarios no localstorage do navegador, em caso de primeiro acesso
        if(!localStorage.getItem('usuarios')) {
            localStorage.setItem('usuarios', JSON.stringify([]));
            console.log("Dados de usuarios nao econtrado. Criado um novo.");
            localStorage.setItem('usuarioLogado', JSON.stringify({}));
        }


        console.log("Dados Inicializados.");
    },

    EncontrarUsuarioCadastrado(id_usuario, senha_usuario) {
        let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let usuario_encontrado = dados_usuarios.find(usuario => usuario.usuario === id_usuario && usuario.senha == senha_usuario);

        return usuario_encontrado;
    },

    EncontrarIdUsuario(id_usuario) {
        let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let usuario_encontrado = dados_usuarios.find(usuario => usuario.usuario === id_usuario);

        return usuario_encontrado;
    },
    
    CadastraNovoUsuario(id_usuario, senha) {
        let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let novo_usuario = {
            usuario: id_usuario,
            senha: senha,
            leads_cadastrados: []
        };
        dados_usuarios.push(novo_usuario);

        localStorage.setItem('usuarios', JSON.stringify(dados_usuarios));

        return novo_usuario;
    },

    LogarUsuario(usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        console.log("Logando usuario " + usuario.usuario);
    },

    DeslogarUsuario() {
        if(JSON.parse(localStorage.getItem('usuarioLogado') !== '{}')) {
            console.log("Deslogando usuario " + JSON.parse(localStorage.getItem('usuarioLogado')).usuario);
            localStorage.setItem('usuarioLogado', JSON.stringify({}));
        }
    },

    UsuarioLogado() {
        let usuario_logado = localStorage.getItem('usuarioLogado') !== '{}';
        return usuario_logado;
    },
}

export default funcoes;

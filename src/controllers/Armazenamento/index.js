const funcoes = {
    Inicializar() {
        //Criação dos usuarios no localstorage do navegador, em caso de primeiro acesso
        if(!localStorage.getItem('usuarios')) {
            localStorage.setItem('usuarios', JSON.stringify([]));
            //console.log("Dados de usuarios nao econtrado. Criado um novo.");
            localStorage.setItem('usuarioLogado', JSON.stringify({}));
        }
        //console.log("Dados Inicializados.");
    },

    EncontrarUsuarioCadastrado(id_usuario, senha_usuario) {
        //Localiza no armazenamento um usuario com o id e a senha correspondentes
        let dados_usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let usuario_encontrado = dados_usuarios.find(usuario => usuario.usuario === id_usuario && usuario.senha == senha_usuario);

        return usuario_encontrado;
    },

    EncontrarIdUsuario(id_usuario) {
        //Localiza um usuario existente com o id correspondente
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
        //console.log("Logando usuario " + usuario.usuario);
    },

    DeslogarUsuario() {
        if(this.UsuarioEstaLogado()) {
            //console.log("Deslogando usuario " + JSON.parse(localStorage.getItem('usuarioLogado')).usuario);
            localStorage.setItem('usuarioLogado', JSON.stringify({}));
        }
    },

    UsuarioEstaLogado() {
        let usuario_logado = localStorage.getItem('usuarioLogado') !== '{}';
        return usuario_logado;
    },

    LeadsUsuarioLogado() {
        //Retorna a lista de leads do usuario que esta logado
        let usuario_logado = JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario_logado.leads_cadastrados;
    },

    NomeUsuarioLogado() {
        let usuario_logado = JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario_logado.usuario;
    },

    AtualizaUsuarioArmazenamento(usuario_atualizado) {
        //Atualiza os dados de um usuario no localstorage 
        let usuarios = JSON.parse(localStorage.getItem('usuarios'));
        let indice_usuario_atualizado = usuarios.findIndex((usuario => usuario.usuario === usuario_atualizado.usuario));

        if(indice_usuario_atualizado < 0)
            return false;

        usuarios[indice_usuario_atualizado] = usuario_atualizado;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        return true;
    },

    AdicionarLeadUsuarioLogado(nome_lead, telefone_lead, email_lead, oportunidades_lead) {
        //Adiciona um novo lead no usuario que esta logado
        if(!this.UsuarioEstaLogado()) {
            return false;
        }

        let usuario_logado = JSON.parse(localStorage.getItem('usuarioLogado'));
        const id_unico = Date.now(); //Atribui a cada card um id unico baseado no tempo em segundos desde 1970
        usuario_logado.leads_cadastrados.push({
            nome: nome_lead,
            telefone: telefone_lead,
            email: email_lead,
            oportunidades: oportunidades_lead,
            status: 1,
            id: id_unico
        });

        //Atualiza as informacoes do usuario logado
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario_logado));
        
        //Atualiza o usuario na lista de usuarios
        return this.AtualizaUsuarioArmazenamento(usuario_logado);
    },

    AtualizaStatusLead(lead, status) {
        if(!this.UsuarioEstaLogado()) {
            return false;
        }

        //Modifica o status do lead apenas se for para o status seguinte (1->2, 2->3)
        if(status != lead.status + 1) {
            return false;
        }

        //Modifica o status do lead e altera no usuario logado e no banco de dados.
        let usuario_logado = JSON.parse(localStorage.getItem('usuarioLogado'));
        let indice_lead_alvo = usuario_logado.leads_cadastrados.findIndex((lead_alvo => lead_alvo.nome === lead.nome && lead_alvo.email === lead.email && lead_alvo.telefone === lead.telefone));
        usuario_logado.leads_cadastrados[indice_lead_alvo].status = status;
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario_logado));
        
        return this.AtualizaUsuarioArmazenamento(usuario_logado);
    }
}

export default funcoes;

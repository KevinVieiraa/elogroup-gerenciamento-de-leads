import Armazenamento from '../Armazenamento'

/* 
    Módulo responsável pelo controle do cadastro de um lead.
    Recebe os parâmetros do formulário de cadastro, verifica os
    requisitos necessários e retorna a resposta.

    A resposta é um objeto contendo uma mensagem, em caso de erro,
    e a confirmação se foi cadastrado.
*/
export default function(input_nome_cliente, input_telefone_cliente, input_email_cliente, oportunidade_rpa, oportunidade_produto_digital, oportunidade_analytics, oportunidade_bpm) {
    let resposta = {
        mensagem_erro: '',
        foi_cadastrado: false
    };
    
    const regex_telefone = /(?=.*\d)/;
    const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex_telefone.test(input_telefone_cliente)) {
        resposta.mensagem_erro = 'Número de telefone inválido.';
        return resposta;
    }

    if(!regex_email.test(input_email_cliente)) {
        resposta.mensagem_erro = 'Formato de email inválido.';
        return resposta;
    }

    if(!(oportunidade_analytics || oportunidade_bpm || oportunidade_rpa || oportunidade_produto_digital)) {
        resposta.mensagem_erro = 'Marque ao menos uma oportunidade.';
        return resposta;
    }

    let oportunidades = [];
    if(oportunidade_analytics){
        oportunidades.push("Analytics");
    }
    if(oportunidade_bpm){
        oportunidades.push("BPA");
    }
    if(oportunidade_produto_digital){
        oportunidades.push("ProdutoDigital");
    }
    if(oportunidade_rpa){
        oportunidades.push("RPA");
    }
    
    resposta.foi_cadastrado = Armazenamento.AdicionarLeadUsuarioLogado(input_nome_cliente, input_telefone_cliente, input_email_cliente, oportunidades);

    return resposta;
}
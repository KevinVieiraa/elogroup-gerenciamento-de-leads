# Gerenciador de Leads
Este repositório é dedicado à implementação do desafio para a vaga de estagiário fullstack da EloGroup.

## Objetivo da Aplicação
Foi desenvolvido uma aplicação para o gerenciamento de leads onde usuários podem se cadastrar para acessar o próprio painel de gerenciamento de leads. Nesse painel o usuário pode cadastrar novos leads e gerenciar os existentes, arrastando os cards e mudando os status deles. Existem três status que um card pode ter: Cliente em Potencial, Dados Confirmados e Reunião Agendada. Um card não pode ser arrastado de modo a pular ou voltar status, ou seja, um card que está em "Dados Confirmados" só pode ser arrastado para "Reunião Agendada".

Como o desafio é voltado para a parte front-end, a persistência dos dados foi feita de forma simples utilizando o 'localstorage' do navegador, sem acesso a bancos de dados ou autenticações reais. No entanto, ainda há a validação básica no formato dos inputs do usuário.
> Feedbacks são bem vindos ;)

# Tecnologias
A aplicação foi toda desenvolvida utilizando a versão 3 do framework **Vue.js**. A documentação pode ser encontrada [aqui](https://v3.vuejs.org/guide/introduction.html).

# Execução
### Pré-Requisitos
- Para executar o projeto é necessário ter instalado o [NodeJS](https://nodejs.org/en/download/).
### Executando
- Baixe ou clone o repositório
- Abra o terminal na pasta do repositório
- Instale as dependencias com: **npm install**
- Execute com: **npm run serve**
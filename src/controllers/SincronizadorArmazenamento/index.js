export default function() {
    let dados_usuarios = localStorage.getItem('usuarios')
    
    //Criação dos usuarios no localstorage do navegador, em caso de primeiro acesso
    if(!dados_usuarios) {
        localStorage.setItem('usuarios', JSON.stringify([]));
        console.log("Dados de usuarios nao econtrado. Criado um novo.");
    }
}
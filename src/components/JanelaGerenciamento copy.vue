<template>
    <div>
        <div id="janela-gerenciamento">
            <div id="titulo-painel">
                <h1>Painel de Leads</h1>
            </div>
            <div id="janela-leads">
                <div class="coluna-leads">
                    <div id="titulo-coluna-inicial">
                        <h1>Cliente em Potencial</h1>
                    </div>
                    <div class="area-cards">
                        <div class="card-cliente">
                            <h1>Cliente1</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente2</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente3</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente4</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente4</h1>
                        </div>
                    </div>
                </div>
                <div class="coluna-leads">
                    <div class="titulo-coluna">
                        <h1>Dados Confirmados</h1>
                    </div>
                    <div class="area-cards">
                        <div class="card-cliente">
                            <h1>Cliente1</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente2</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente3</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente4</h1>
                        </div>
                    </div>
                </div>
                <div class="coluna-leads">
                    <div id="titulo-coluna-final">
                        <h1>Reunião Agendada</h1>
                    </div>
                    <div class="area-cards">
                        <div class="card-cliente">
                            <h1>Cliente1</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente2</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente3</h1>
                        </div>
                        <div class="card-cliente">
                            <h1>Cliente4</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JanelaGerenciamento'
    }
</script>

<style scoped>
    #janela-gerenciamento {
        width: 100%;
        height: 750px;
        display: flex;
        flex-direction: column;
        margin: 4% auto;
        background-color: #fefefe;
        border-radius: 2px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
    }

    #titulo-painel {
        height: 8%;
        width: 30%;
        margin-left: 35%;
        margin-right: 35%;
        margin-top: 30px;
        border: none;
        border-bottom: 0.001em solid rgb(207, 207, 207);
    }

    #titulo-painel h1 {
        color: #171b1c;
        font-size: 30px;
    }

    #janela-leads {
        margin: 35px;
        height: 90%;
        /*background-color: rgb(231, 203, 203);*/
        display: flex;
        justify-content: center;
    }

    #titulo-coluna-inicial,
    .titulo-coluna,
    #titulo-coluna-final {
        background-color: #171b1c;
        height: 45px;
        position: relative;
    }

    #titulo-coluna-inicial h1,
    .titulo-coluna h1,
    #titulo-coluna-final h1{
        position: absolute;
        top: 30%;
        left: 10%;
        color: white;
        font-weight: normal;
        font-size: 18px;
    }

    #titulo-coluna-inicial::before,
    .titulo-coluna::before,
    #titulo-coluna-final::before {
        content: "";
        float: left;
        width: 0;
        height: 0;
    }

    #titulo-coluna-inicial::after,
    .titulo-coluna::after,
    #titulo-coluna-final::after {
        content: "";
        float: right;
        width: 0;
        height: 0;
    }

    .titulo-coluna::before {
        border-top: 22px solid #171b1c;
        border-bottom: 23px solid #171b1c;
        border-left: 10px solid rgb(255, 255, 255);
    }

    .titulo-coluna::after {
        border-top: 22px solid rgb(255, 255, 255);
        border-bottom: 23px solid rgb(255, 255, 255);
        border-left: 10px solid #171b1c;
    }


    #titulo-coluna-inicial::before {
        border-top: 22px solid #171b1c;
        border-bottom: 23px solid #171b1c;
        border-left: 10px solid #171b1c;
    }

    #titulo-coluna-inicial::after {
        border-top: 22px solid rgb(255, 255, 255);
        border-bottom: 23px solid rgb(255, 255, 255);
        border-left: 10px solid #171b1c;
    }

    #titulo-coluna-final::before {
        border-top: 22px solid #171b1c;
        border-bottom: 23px solid #171b1c;
        border-left: 10px solid rgb(255, 255, 255);
    }

    #titulo-coluna-final::after {
        border-top: 22px solid rgb(255, 255, 255);
        border-bottom: 23px solid rgb(255, 255, 255);
        border-left: 10px solid #171b1c;
    }

    .coluna-leads {
        /*background-color: rgb(206, 233, 206);*/
        margin: 0px;
        width: 25%;
    }

    .area-cards {
        height: 100%;
    }

    .card-cliente {
        width: 80%;
        margin: 0 auto;
        margin-top: 15px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 2px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.459);
        border: 0.001em solid rgb(209, 209, 209);
    }

    .card-cliente h1 {
        font-size: 18px;
    }
    
    @media screen and (min-height: 650px) {
        #janela-gerenciamento { height: 520px; }
    }

    @media screen and (min-height: 950px) {
        #janela-gerenciamento { height: 780px; }
    }

</style>
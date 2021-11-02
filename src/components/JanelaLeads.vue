<template>
    <div class="coluna-leads">
        <div class="titulo-coluna">
            <h1>{{ titulo_coluna }}</h1>
        </div>
        <div class="container-cards">
            <CardLead nome_lead="Vale" email_lead="vale@email.com" tel_lead="(27) 99654-3554" />
            <CardLead nome_lead="Garoto" email_lead="garoto@email.com" tel_lead="(27) 99654-3554" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JanelaLeads',
        props: {
            titulo_coluna: String,
            cards: []
        }
    }
</script>

<style scoped>
    .coluna-leads {
        /*background-color: turquoise;*/
        height: 80%;
        width: 350px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .titulo-coluna {
        background-color: #171b1c;
        height: 45px;
        position: relative;
    }

    .container-cards {
        height: 100%;
        overflow-y: auto;
    }
</style>
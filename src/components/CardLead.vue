<!--
    Componente que representa um card que contém todas as informações de
    um lead cadastrado. Pode ser arrastrado e colocado em outro container válido.
-->

<template>
    <div class="card-lead" draggable="true" @dragstart="comecarMover">
        <h1>{{ objeto_lead.nome }}</h1>
        <br>
        <div id="container-info-card">
            <div>
                <h2>{{ objeto_lead.telefone }}</h2>
                <h2>{{ objeto_lead.email }}</h2>
            </div>
        </div>
        <div id="container-oportunidades">
            <h2 v-for="(oportunidade, index) in objeto_lead.oportunidades" :key="index">
                #{{ oportunidade }}&nbsp
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardLead',
        props: {
            objeto_lead: null,
        },
        methods: {
            comecarMover(event) {
                event.dataTransfer.dropEffect = 'move';
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('id_card', this.objeto_lead.id);
            }
        }
    }
</script>

<style scoped>
    .card-lead {
        margin: 10px 30px 10px 30px;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        background-color: rgb(255, 255, 255);
        cursor: grab;
    }

    .card-lead h1 {
        font-size: 20px;
        text-align: left;
    }

    .card-lead h2 {
        color: rgb(182, 182, 182);
        font-size: 13px;
        text-align: left;
    }

    #container-info-card {
        display: flex;
        justify-content: space-between;
    }

    #container-oportunidades {
        display: flex;
        align-items: flex-start;
    }

    #container-oportunidades h2{
        font-size: 12px;
    }


</style>
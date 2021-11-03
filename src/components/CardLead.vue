<template>
    <div class="card-lead" draggable="true" @dragstart="comecarMover">
        <h1>{{ objeto_lead.nome }}</h1>
        <br>
        <h2>{{ objeto_lead.email }}</h2>
        <h2>{{ objeto_lead.telefone }}</h2>
    </div>
</template>

<script>
    import CriadorID from '../controllers/CriadorID';

    export default {
        name: 'CardLead',
        data() {
            return{
                id_card: 0,
            }
        },
        props: {
            objeto_lead: null,
        },
        methods: {
            comecarMover(event) {
                event.dataTransfer.dropEffect = 'move';
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('nome_card', this.objeto_lead.nome);
            }
        },
        mounted() {
            this.id_card = CriadorID.novoId();
            //console.log(this.id_card);
        }
    }
</script>

<style scoped>
    .card-lead {
        margin: 10px 30px 10px 30px;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
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
</style>
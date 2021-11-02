<template>
    <div class="card-lead">
        <h1>{{ nome_lead }}</h1>
        <br>
        <h2>{{ email_lead }}</h2>
        <h2>{{ tel_lead }}</h2>
        <h2>{{ id_card }}</h2>
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
            nome_lead: String,
            email_lead: String,
            tel_lead: String
        },
        methods: {

        },
        mounted() {
            this.id_card = CriadorID.novoId();
            console.log(this.id_card);
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
<template>
    <div>
        <FormCadastroLead v-show="mostrar_cadastro_leads" @fechar="esconderCadastro" />
        
        <div id="painel-gerenciamento">
            <div id="titulo-painel">
                <h1>Painel de Leads</h1>
            </div>
            <div id="container-leads">
                <div class="coluna-leads">
                    <div class="titulo-coluna">
                        <h1>Cliente em Potencial</h1>
                    </div>
                    <div class="container-cards" @drop="colocarCard($event, 1)" @dragenter.prevent @dragover.prevent>
                        <CardLead v-for="lead in leads_em_potencial" :key="lead.id" :objeto_lead="lead"/>
                        <div id="container-botao-lead">
                            <BotaoPrincipal texto_botao="Novo Lead (+)" @click="mostrarCadastro"/>
                        </div>
                    </div>
                </div>

                <div class="coluna-leads">
                    <div class="titulo-coluna">
                        <h1>Dados Confirmados</h1>
                    </div>
                    <div class="container-cards" @drop="colocarCard($event, 2)" @dragenter.prevent @dragover.prevent>
                        <CardLead v-for="lead in leads_dados_confirmados" :key="lead.id" :objeto_lead="lead"/>
                    </div>
                </div>

                <div class="coluna-leads">
                    <div class="titulo-coluna">
                        <h1>Reunião Agendada</h1>
                    </div>
                    <div class="container-cards" @drop="colocarCard($event, 3)" @dragenter.prevent @dragover.prevent>
                        <CardLead v-for="lead in leads_reuniao_agendada" :key="lead.id" :objeto_lead="lead"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BotaoPrincipal from './BotaoPrincipal.vue';
    import CardLead from './CardLead.vue';
    import FormCadastroLead from './FormCadastroLead.vue';
    import Armazenamento from '../controllers/Armazenamento';

    export default {
        name: 'JanelaGerenciamento',
        data() {
            return {
                mostrar_cadastro_leads: false,
                lista_leads: [],
                //leads_em_potencial: [],
                //leads_dados_confirmados: [],
                //leads_reuniao_agendada: []
            }
        },
        components: {
            BotaoPrincipal,
            CardLead,
            FormCadastroLead,
            Armazenamento
        },
        computed: {
            leads_em_potencial: function() {
                return this.lista_leads.filter((lead) => lead.status == 1);
            },

            leads_dados_confirmados: function() {
                return this.lista_leads.filter((lead) => lead.status == 2);
            },

            leads_reuniao_agendada: function() {
                return this.lista_leads.filter((lead) => lead.status == 3);
            }
        },
        methods: {
            mostrarCadastro() {
                this.mostrar_cadastro_leads = true;
            },
            esconderCadastro() {
                this.mostrar_cadastro_leads = false;
            },
            async carregarLeads() {
                this.lista_leads = Armazenamento.LeadsUsuarioLogado();
            },
            colocarCard(event, status_coluna) {
                //Recupera os dados do card
                const nome_card = event.dataTransfer.getData('nome_card');

                //Indice onde o card estava na lista
                const indice_lead = this.lista_leads.findIndex((item => item.nome == nome_card));
                let lead_arrastado = this.lista_leads[indice_lead];

                if(Armazenamento.AtualizaStatusLead(lead_arrastado, status_coluna)) {
                    //Atualiza a lista de leads com os status atualizados
                    this.carregarLeads();
                }
            }
        },
        beforeCreate() {
            if(!Armazenamento.UsuarioEstaLogado()) {
                this.$router.replace('/login');
            }
        },
        mounted() {
            this.carregarLeads();
        }
    }
</script>

<style scoped>
    #painel-gerenciamento {
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

    #container-leads {
        height: 80%;
        /*background-color: tomato;*/
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    #container-botao-lead {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .titulo-coluna {
        background-color: #171b1c;
        height: 45px;
        position: relative;
    }

    .titulo-coluna h1 {
        position: absolute;
        top: 30%;
        left: 10%;
        color: white;
        font-weight: normal;
        font-size: 18px;
    }

    .titulo-coluna::before {
        content: "";
        float: left;
        width: 0;
        height: 0;
        border-top: 22px solid #171b1c;
        border-bottom: 23px solid #171b1c;
        border-left: 10px solid #171b1c;
    }

    .titulo-coluna::after {
        content: "";
        float: right;
        width: 0;
        height: 0;
        border-top: 22px solid rgb(255, 255, 255);
        border-bottom: 23px solid rgb(255, 255, 255);
        border-left: 7px solid #171b1c;
    }

    .coluna-leads {
        /*background-color: turquoise;*/
        height: 80%;
        width: 350px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .container-cards {
        height: 100%;
        overflow-y: auto;
    }

    .card-lead {
        margin: 10px 30px 10px 30px;
        padding: 20px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
        background-color: rgb(255, 255, 255);
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

    @media screen and (min-height: 650px) {
        #painel-gerenciamento { height: 520px; }
    }

    @media screen and (min-height: 950px) {
        #painel-gerenciamento { height: 780px; }
    }
</style>
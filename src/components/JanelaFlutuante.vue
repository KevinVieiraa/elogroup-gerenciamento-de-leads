<template>
    <div class="janela-fundo">
        <div class="janela">
            <header class="header-janela">
                <button type="button" class="botao-fechar" @click="fechar">x</button>
            </header>

            <section class="janela-conteudo">
                <slot name="conteudo">
                    {conteudo}
                </slot>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JanelaFlutuante',
        methods: {
            fechar() {
                this.$emit('fechar');
            },
        },
    }
</script>

<style scoped>
    .janela-fundo {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9997;
    }

    .janela {
        background: #FFFFFF;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.459);
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .header-janela {
        padding: 15px;
        display: flex;
    }

    .header-janela {
        position: relative;
        justify-content: space-between;
    }

    .janela-conteudo {
        position: relative;
        padding: 20px 10px;
    }

    .botao-fechar {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        padding-top: 3px;
        cursor: pointer;
        font-weight: normal;
        color: #000000;
        background: transparent;
    }
</style>
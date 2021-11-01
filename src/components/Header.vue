<template>
    
</template>

<script>
    export default {
        name: 'Header',
        props: ['url_logo', 'alt_logo']
    }
</script>

<style scoped>
    #header {
        background-color: #e9e9e9;
        padding: 15px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo {
        width: 100%px;
        height: 80px;
        margin-top: 0px;
    }
</style>
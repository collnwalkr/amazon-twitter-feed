<template>

    <div id="">
        this is template body

        <h1>{{ msg }}</h1>
    </div>

</template>

<script>
    export default{
        name: 'twitter-widget',
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>

<style scoped lang="scss">
@import "../css/variables.scss";

    div {
        background-color: green;
    }

</style>
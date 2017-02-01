<template>

    <div>
        this is template body

        <h1>{{ msg }}</h1>
    </div>

</template>

<style scoped>

    div{
        background-color: green;
    }

</style>

<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }

</script>

<template>

    <div id="app">
        <h1>{{ msg }}</h1>
        <tweet/>
    </div>

</template>

<script>
import tweet from './Tweet.vue'

export default{
    name: 'twitter-widget',
    components: {
        tweet
    },
    data(){
        return{
            msg:'#Amazon'
        }
    },
}
</script>

<style lang="scss">
@import "../css/variables.scss";
@import "../../node_modules/reset-css/reset.css";

#app{
    font-family: $font;
    color: $font-color;
    width: $widget-width;
    height: $widget-height;
    background: $sidebar-color;
}
</style>
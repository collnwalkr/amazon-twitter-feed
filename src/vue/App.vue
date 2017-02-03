<template>

    <div id="app">
        <div class="top carousel">
            <tweet class = "tweet-app active first"/>
            <tweet class = "tweet-app"/>
            <tweet class = "tweet-app"/>
            <tweet class = "tweet-app"/>
        </div>

        <button class="control-btn" id="next-btn"></button>
        <button class="control-btn" id="prev-btn"></button>
    </div>

</template>

<script>
import tweet from './Tweet.vue'
import 'jquery'
import bxslider from 'bxslider'

let updateActive = (el, oldIndex, newIndex) => {
    try{
        $('.tweet.active').removeClass('active')
        $(el).addClass('active')
    } catch(e) {
        console.log(e)
    }
}

$(document).ready(function(){
    $('.carousel').bxSlider({
        mode: 'vertical',
        slideWidth: 301,
        speed: 200,
        minSlides: 1,
        easing: 'ease-out',
        infiniteLoop: false,
        touchEnabled: false,
        nextSelector: $('#next-btn'),
        prevSelector: $('#prev-btn'),
        nextText: '',
        prevText: '',
        pager: false,
        onSlideNext: function(el, oldIndex, newIndex){
            $('.carousel').removeClass('top')
            updateActive(el, oldIndex, newIndex)
        },
        onSlidePrev: function(el, oldIndex, newIndex){
            if(newIndex === 0) $('.carousel').addClass('top')
            else $('.carousel').removeClass('top')
            updateActive(el, oldIndex, newIndex)
        }
  });



});


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
@import "../../node_modules/bxslider/dist/jquery.bxslider.min.css";

#app{
    font-family: $font;
    color: $font-color;
    width: $widget-width;
    height: $widget-height;
    background: $sidebar-color;
    position: relative;
}

.control-btn{
    width: $btn-width;
    margin-left: -$btn-width/2;
    height: 30px;
    padding: 0;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
}

#next-btn{
    position: absolute;
    bottom: 0;
    left:50%;
}

#prev-btn{
    position: absolute;
    top: 0;
    left:50%;
}

.carousel{
    &.top{
        transform: translate3d(0px, $translate, 0px) !important;
    }
}

.tweet-app {
    margin: $tweet-margin auto;
}

.first {
    margin-top: 40px;
}

.bx-wrapper{
    margin: 0;
    height: 260px;
    box-shadow: none;
    border: none;
    .bx-viewport{
        height: 100% !important;
    }
}
</style>
<template>

    <div id="app">
        <div class="top carousel">
            <tweet  v-for="(tweet, index) in tweets" v-bind:t="tweet" class="tweet-app" :class="{ first : index === 0, active : index === 0  }"/>
            <end-slide class="tweet-app"/>
        </div>

        <span class="amazon-header">
            {{ header }}
        </span>

        <button class="control-btn" id="next-btn">
            <span id="next-btn-img"></span>
        </button>
        <button class="control-btn fade fade-hide" id="prev-btn">
            <span id="prev-btn-img"></span>
        </button>
    </div>

</template>

<script>
import tweet from './Tweet.vue'
import endSlide from './EndSlide.vue'
import 'jquery'
import 'bxslider'
import buildCarousel from '../js/carousel'
import tweetPromise from '../js/request'
import fallbackTweets from '../fallback-tweets'

export default{
    name: 'twitter-widget',
    components: {
        tweet,
        endSlide
    },
    data(){
        return{
            header:'#Amazon',
            tweets: {},
        }
    },
    created : function () {
        tweetPromise.then((response) => {
            this.tweets = response.data.statuses;
            buildCarousel()
        })
        .catch((err) => {
            this.tweets = fallbackTweets.statuses;
            buildCarousel()
        });
    }
}
</script>

<style lang="scss">
@import "../css/variables.scss";
@import "../../node_modules/reset-css/reset.css";
@import "../../node_modules/bxslider/dist/jquery.bxslider.min.css";
@import "../css/carousel.scss";

#app{
    font-family: $font;
    color: $font-color;
    width: $widget-width;
    height: $widget-height;
    background: $sidebar-color;
    position: relative;
    overflow: hidden;
    margin-left: -18px;
}

</style>
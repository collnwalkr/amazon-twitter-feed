<template>

    <div class="tweet">
        <a class="time-stamp" :href="tweetUrl" target="_blank">
            {{ time }}
        </a>
        <div class="tweet-content" v-html="tweetContent"></div>
        <div class="user">
            <span class="user-name">{{ name }}</span>
            <span class="user-screen">{{ screen }}</span>
        </div>
    </div>

</template>

<script>
import parseTweet from '../js/twitter-entities'
import moment from 'moment'

export default{
    name: 'tweet',
    props: ['t'],
    data(){
        return{
            msg: 'hello vue',
            name: this.t.user.name,
            screen: '@' + this.t.user.screen_name
        }
    },
    computed: {
        tweetContent: function () {
            return parseTweet(this.t)
        },
        time: function () {
            let date = this.t.created_at;
            let passed = moment(date, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow()
            return passed;
        },
        tweetUrl: function () {
            return 'https://twitter.com/' + this.t.user.screen_name + '/status/' + this.t.id_str;
        }
    }
}
</script>

<style lang="scss">
@import "../css/variables";

.tweet{
    width: $tweet-width !important;
    height: $tweet-height;
    box-sizing: border-box;
    padding: $tweet-padding;
    display: flex;
    flex-direction: column;
    @include border-bland();
    @include opacity-default();
    @include drop-none();

    &.active{
        @include drop-active();
        @include opacity-active();
        @include tweet-border();
        @include border-accent();
    }
    &:hover{
        @include drop-hover();
    }
}

.time-stamp{
    color: $link-color;
    font-size: $large-font;
    margin-bottom: $margin-time;
}

a {
    color: $link-color;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        color: $amazon-color;
    }
}

.tweet-content{
    font-size: $small-font;
    line-height: $line-height;

    .hashtag{
        font-weight: bold;
        color: $hashtag-color;
    }

    .user{
        color: $screen-color;
    }

    .amazon-hashtag{
        color: $amazon-color;
    }
}

.user{
    font-size: $small-font;
    margin-top: auto;
    .user-name{
    }

    .user-screen{
        color: $screen-color;
    }
}
</style>
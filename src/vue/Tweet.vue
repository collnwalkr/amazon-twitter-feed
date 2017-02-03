<template>

    <div class="tweet">
        <p class="time-stamp">{{ time }}</p>
        <div class="tweet-content" v-html="tweetContent"></div>
        <div class="user">
            <span class="user-name">{{ name }}</span>
            <span class="user-screen">{{ screen }}</span>
        </div>
    </div>

</template>

<script>
import tweet from '../example-tweet.json'
import parseTweet from '../js/twitter-entities'

export default{
    name: 'tweet',
    data(){
        return{
            time: '31 seconds ago',
            msg: 'hello vue',
            name: 'Bill Klein',
            screen: '@ReallyBillKlein',
            tweet: tweet
        }
    },
    computed: {
        tweetContent: function () {
            return parseTweet(tweet)
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

.tweet-content{
    font-size: $small-font;
    line-height: $line-height;

    a {
        color: $link-color;
        text-decoration: none;
    }

    .hashtag{
        font-weight: bold;
        color: $hashtag-color;
    }

    .amazon-hashtag{
        color: $amazon-color;
    }
}

.user{
    font-size: $large-font;
    margin-top: auto;
    .user-name{

    }
    .user-screen{
        color: $screen-color;
    }
}
</style>
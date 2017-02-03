<template>

    <div class="end-slide">
        <p>
            See more
            <span class="amazon">#Amazon</span>
            on
            <a href="https://twitter.com/search?q=%23Amazon">
                Twitter
            </a>
        </p>
    </div>

</template>

<script>
export default{
    name: 'end-slide',
    data(){
        return{
            msg: 'hello vue',
        }
    },
    computed: {

    }
}
</script>

<style lang="scss">
    @import "../css/variables";

    .end-slide{
        width: $tweet-width !important;
        height: $tweet-height;
        box-sizing: border-box;
        padding-left: 12px;
        display: flex;
        flex-direction: column;
        @include border-bland();
        @include opacity-default();
        @include drop-none();
        line-height: $tweet-height;

        &.active{
            @include drop-active();
            @include opacity-active();
            @include tweet-border();
            @include border-accent-end();
        }
        &:hover{
            @include drop-hover();
        }

        .amazon{
            color: $amazon-color;
            font-weight: bold;
            display: inline;
        }

        p{
            vertical-align: middle;
        }

        span{
            display: inline;
        }

        a{
            display: inline;
        }
    }
</style>
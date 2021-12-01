<template>
        <li>
            <button @click="showAnswer">
                {{ question }} <svg :class="{open : isOpen}" viewBox="0 0 26 26"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
            </button>
            <div :class="{open : isOpen}">
                <p><span v-html="answer" /></p>
            </div>

        </li>
</template>

<script>
    export default {
        name: "faq",
        props:{
            question: String,
            answer: String,
            isOpen:{
                default: false,
                type: Boolean
            }
        },
        methods:{
           showAnswer(){
               this.$emit('opened', this.$.vnode.key)
           },
        }
    }
</script>
<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    @import "src/assets/Sass/responsiveScales";
    .open{
        min-height: 180px;
        @media screen and (max-width: $mobile) {
            min-height: 220px;
        }
    }
    svg.open{
        transform: translateY(-48%);
        fill: #FE3636;
    }
    hr{
        margin-top: 150px;
        background-color: #222222;
        height: 10px;
        border: #222222;
    }
    li{
        list-style: none;
        margin-bottom: 10px;
        button{
            width: 100%;
            cursor: pointer;
            padding: 0.8em 2.2em 0.8em 1.2em;
            margin-bottom: 1px;
            font-weight: 400;
            position: relative;
            background-color: #303030;
            outline: none;
            border: none;
            color: honeydew;
            font-size: 1.625rem;
            @media screen and (max-width: $tablet) and (min-width: $mobile) {

            }
            @media screen and (max-width: $mobile) {
                font-size: 18px;
            }
            svg{
                position: absolute;
                right: 1em;
                top: 50%;
                height: 1em;
                width: 1em;
                fill: $blueHover;
                transform: translateY(-50%) rotate(-45deg);
                transition: all .2s;
            }
        }
       div{
           margin-top: 4px;
           background-color: #303030;
           height: 0;
           min-height: 0;
           overflow: hidden;
           position: relative;
           color: honeydew;
           transition: min-height .6s;
           p{
               padding:2.5rem 1.2rem;
               @media screen and (max-width: $tablet) and (min-width: $mobile) {
                   font-size: 15px;
                   padding-top: 1rem;
               }
               @media screen and (max-width: $mobile) {
                   font-size: 15px;
                   padding: 1rem .8rem;
               }
           }
       }

    }
</style>
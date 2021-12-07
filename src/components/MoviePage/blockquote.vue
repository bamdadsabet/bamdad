<template>
    <blockquote>
        <p>this part doesnt work, yes it doesnt work because apparently you have to pay for the api to work but im including this part in the project so maybe one day, one day i would find another api for this part</p>
        <h4>- The Author</h4>
        <button>change the quote</button>
    </blockquote>
</template>

<script>
    export default {
        name: "blockquote"
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    @import "src/assets/Sass/responsiveScales";
    $blockQuote-bg:rgb(14, 14, 14);
    blockquote{
        background-color: $blockQuote-bg;
        padding: 80px 80px 20px 65px;
        width: 40%;
        border: 1px solid black;
        margin: 150px auto 0 auto;
        border-radius: 10px;
        @media screen and (max-width: $lapTop) and (min-width: $mobile + 20px){
            margin-top: 100px;
            width: 60%;
        }
        @media screen and (max-width: $mobile + 20px){
            margin-top: 0;
            width: 80%;
            padding: 30px 30px 10px 15px;
        }
        p{
            color: honeydew;
            line-height: 30px;
            border-left: 3px solid $red;
            padding-left: 15px;
            @media screen and (max-width: $mobile + 20px) {
                font-size: 14px;
            }
        }
        h4{
            color: $red;
            text-align: right;
            margin-top: 30px;
            padding-right: 20px;
            @media screen and (max-width: $mobile + 20px) {
                font-size: 16px;
                text-align: center;
                padding-right: 0;
            }
        }
        button{
            margin-top: 50px;
            background-color: $red;
            color: #FFFFFF;
            outline: none;
            width: 40%;
            margin-left: 30%;
            height: 50px;
            border: 2px solid $red;
            border-radius: 5px;
            cursor: pointer;
            transition: all .4s;
            @media screen and (max-width: $mobile + 20px) {
                width: 80%;
                margin-left: 10%;
            }
            &:hover{
                background-color: $blockQuote-bg;
                color: $red;
            }
        }
    }
</style>
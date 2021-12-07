<template>
    <h1>Time wasting and space consuming information</h1>
    <ul>
        <faq v-for="(item, index) in faqInfo"
             :key="index"
             :question="item.question"
             :answer="item.answer"
             @opened="opened"
             :isOpen="isOpen === index"
        />
    </ul>
</template>

<script>
    import faq from "./faq";
    export default {
        name: "faqHolder",
        components: {
            faq
        },
        data(){
            return{
                faqInfo: [
                    {question: 'What is The Movie App?',
                        answer:'Movie App is a encyclopedia service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can read as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!\n' +
                            '                ',
                    }, {question: 'What is The Movie App?',
                        answer:'Movie App is a encyclopedia service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can read as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!\n' +
                            '                ',
                    },
                    {question: 'What is The Movie App?',
                        answer:'Movie App is a encyclopedia service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can read as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!\n' +
                            '                ',
                    },
                    {question: 'What is The Movie App?',
                        answer:'Movie App is a encyclopedia service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can read as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!\n' +
                            '                ',
                    }
                ],
                wasOpen: null,
                isOpen: null
            }
        },
        methods: {
            opened(id) {
                this.wasOpen = this.isOpen;
                this.isOpen = id;
                if (this.wasOpen === this.isOpen) this.isOpen = null;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/responsiveScales";
    h1{
        color: honeydew;
        text-align: center;
        margin-top: 80px;
        margin-bottom: 40px;
        @media screen and (max-width: $tablet) and (min-width: $mobile) {
            font-size: 20px;
        }
        @media screen and (max-width: $mobile) {
            font-size: 18px;
            margin-bottom: 20px;
        }
    }
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-left: 4vw;
        padding-right: 4vw;
        margin: 1.25em auto;
        max-width: 815px;
        padding-bottom: 80px;

    }

</style>
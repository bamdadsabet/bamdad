<template>
    <div class="carousel-container" :id="title">
        <h1>{{ title }}</h1>
        <div class="Carousel">
            <moviePoster v-for="id in movieIds" :key="id" :movie-id="id"  />
        </div>
        <div class="button-container">
            <button @click="scrollTo('left')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40"><path class="svg-c1" d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z" style="transform: translateY(2px);"></path></svg></button>
            <button @click="scrollTo('right')"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40"><g style="transform: rotate(180deg); transform-origin: 20px center;"><path class="svg-c1" d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z"></path></g></svg></button>
        </div>
    </div>
</template>

<script>
    import moviePoster from "../moviePoster";
    export default {
        name: "PosterSlider",
        components: {
            moviePoster
        },
        data: function () {
            return {
                scrollAmount: 0,
                scrollPerClick: window.innerWidth,
                movies: null,
            }
        },
        props: {
            title: String,
            movieIds: Array
        },
        methods:{
            scrollTo(to){
                let carousel = this.carousel;
                let scrollAmount = this.scrollAmount;
                let scrollPerClick = this.scrollPerClick;
                if (to === 'right') {
                    scrollAmount += this.scrollPerClick;
                    scrollAmount = scrollAmount + scrollPerClick > carousel.scrollWidth ? carousel.scrollWidth - scrollPerClick : scrollAmount;
                }
                else if (to === 'left') {
                    scrollAmount -= this.scrollPerClick;
                    scrollAmount = scrollAmount < 0 ? 0 : scrollAmount;
                }
                else {
                    console.error('the parameter to must be either "left" or "right"');
                    return null;
                }
                carousel.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior:"smooth"
                });
                this.scrollAmount = scrollAmount;
            }
        },
        mounted() {
            console.log('hello')
            console.log('hello')
            console.log('do')
            this.carousel = document.querySelector(`div#${this.$props.title} div.Carousel`);
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/responsiveScales";
    @import "src/assets/Sass/colorVarailbles";
    div.carousel-container{
        margin-bottom: 140px;
        @media screen and (max-width: 900px) and (max-height: 600px){

        }
        h1{
            padding-left: 30px;
            margin-top: 50px;
            margin-bottom: 20px;
            color: honeydew;
            font-size: 20px;
        }
        div.Carousel{
            height: 335px;
            align-items: center;
            overflow-x: hidden;
            position: absolute;
            white-space: nowrap;
            margin-bottom: 30px;
            padding: 0 15px;
            width: calc(100% - 30px);
            @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
                height: 435px;
            }
            @media screen and (max-width: 570px){
                width: 95vw;
                padding: 0;
            }
        }
        /*button container*/
        div.button-container{
            display: flex;
            justify-content: space-between;
            height: 300px;
            width: 100%;
            @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
                height: 320px;
            }
            @media screen and (max-width: $lapTop) and (min-width: $tablet) {
                height: 280px;
            }
            @media screen and (max-width: $tablet){
                height: 250px;
            }

            button{
                background-color: $main-bg;
                height: 100%;
                outline: none;
                border: none;
                width: 35px;
                z-index: 3;
                cursor: pointer;
                opacity: 0;
                transition: all .5s;
                color: honeydew;
                svg{
                    fill: honeydew;
                }
                &:hover{
                    opacity: .8;
                }
            }
        }
    }
</style>
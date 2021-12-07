<template>
    <a v-if="!isLoading" :href="'/'+movieId" @click="log" :class="{search: search , slider: !search}">
        <img v-if="movie" :src="movie.poster" alt="">
<!--        hover background-->
        <div></div>
<!--        poster info-->
        <section v-if="movie">
            <h3>{{movie.type}} - <span class="date">{{movie.year}}</span></h3>
            <h3 v-if="movie.rating">
                <span>
                    <svg fill="#ffffff" class="t-icon-0-1-156">
                        <path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z">
                        </path>
                    </svg>
                </span>
                {{movie.rating}} / 10
            </h3>
            <span>fav</span>
            <span>watch later</span>
        </section>
<!--        title-->
        <h2 v-if="movie">{{movie.title}}</h2>
    </a>
    <a v-else :class="{search: search , slider: !search}">

    </a>
</template>

<script>
    export default {
        name: "slider",
        props:{
            movieId: String,
            search:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                movie:{},
                isLoading: false
            }
        },
        mounted() {
            this.isLoading = true;
            fetch(`http://www.omdbapi.com/?apikey=af4546c0&i=${this.$props.movieId}`)
                .then(res => res.json())
                .then(data => {
                    this.movie = {
                        year: data.Year,
                        type: data.Type,
                        title: data.Title,
                        poster: data.Poster,
                        rating: data.imdbRating !== 'N/A' && data.imdbRating,
                    };
                    this.isLoading = false;
                });
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/responsiveScales";
    a{
        display: inline-block;
        text-decoration: none;
        color: white;
        position: relative;
        background: #37383e;
        text-align: left;
        width: 13.28%;
        height: 300px;
        border-radius: 5px;
        margin: 0 10px;
        @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
           width: 16.5%;
            height: 310px;

        }
        @media screen and (max-width: $lapTop) and (min-width: $tablet) {
            width: 19.4%;
            height: 280px;
        }
        &.slider{
            @media screen and (max-width: $tablet) and (min-width: $mobile){
                width: 25.5%;
                height: 250px;
            }
            @media screen and (max-width: $mobile){
                width: 45%;
                height: 250px;
            }
        }
        &.search{
            margin: 40px 25px;
            @media screen and (max-width: $tablet) and (min-width: $mobile){
                width: 28.5%;
                height: 250px;
            }
            @media screen and(max-width: $mobile){
                width: 42%;
                height: 250px;
            }
        }
        h2{
            width: 100%;
            text-align: left;
            position: absolute;
            bottom: -35px;
            left: 5px;
            font-size: 10px;
            overflow: hidden;

        }
        img{
            height: 100%;
            width: 100%;
            border-radius: inherit;
            transition: all 5s;
        }
        div{
            opacity: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            border-radius: inherit;
            position: relative;
            top: -304px;
            transition: all .5s;
            @media screen and (max-width: $deskTop) and (min-width: $lapTop) {
                top: -314px;
            }
            @media screen and (max-width: $lapTop) and (min-width: $tablet) {
                top: -284px;
            }
            @media screen and (max-width: $tablet){
                top: -254px;
            }
        }
        section {
            opacity: 0;
            position: absolute;
            bottom: 0;
            padding-bottom: 50px;
            transition: all .5s;
            margin-left: 15px;

            h3 {
                margin-bottom: 10px;
                font-weight: normal;;
                font-size: 15px;
                svg{
                    width: 40px;
                    height: 15px;
                    fill: honeydew;
                }
            }
            >span{
                display: inline-block;
                margin-top: 4px;
                transition: color .2s;
                &:first-of-type{
                    margin-right: 3vw;
                }
                &:hover{
                    color: red;
                }
            }
        }
        &:hover div{
            opacity: .7;
        }
        &:hover section{
            opacity: 1;
        }
    }

</style>
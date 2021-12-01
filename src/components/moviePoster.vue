<template>
    <a v-if="!isLoading" :href="'/'+movieId" @click="log" :class="{search: search , slider: !search}">
        <img v-if="movie" :src="movie.poster" alt="">
<!--        hover background-->
        <div></div>
<!--        poster info-->
        <section v-if="movie">
            <h3>{{movie.type}} - <span class="date">{{movie.year}}</span></h3>
            <h3 v-if="movie.rating">{{movie.rating}} / 10</h3>
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
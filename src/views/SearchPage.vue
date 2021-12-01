<template>
    <div class="main">
        <svg class="go-back" viewBox="0 0 26 26" @click="goBack">
            <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
            </path>
        </svg>
        <input @input="searching" v-model="search" type="search">
<!--        not searching-->
        <svg v-if="searchResult === null" class="search">
            <rect width="88" height="129" rx="5" fill="#37383e" x="49"></rect>
            <path d="M75.443 47.275A31.83 31.83 0 0 0 52.3 36.226q-.557-.02-1.113-.02a32.22 32.22 0 0 0-22.719 9.386c-10.43 10.41-12.423 26.587-4.83 39.215a5.99 5.99 0 0 1-.86 7.33L10.8 104.12c-.676.684-1.048 1.61-1.032 2.572a3.06 3.06 0 0 0 .938 2.213 3.3 3.3 0 0 0 4.477-.069L27.33 96.69a5.9 5.9 0 0 1 7.237-.921 32.09 32.09 0 0 0 16.609 4.616c9.247-.003 18.046-3.986 24.15-10.932C85.87 77.386 85.92 59.4 75.443 47.275zm-4.7 37.635c-4.88 5.74-12.034 9.046-19.568 9.046a25.68 25.68 0 0 1-19.569-9.042c-8.076-9.606-8.076-23.628 0-33.234 4.882-5.74 12.038-9.048 19.573-9.046s14.7 3.305 19.57 9.044a25.83 25.83 0 0 1-.004 33.232z" fill="#666666">
            </path>
        </svg>
<!--        search result is here-->
        <template v-else>
            <loading v-if="!(awaitingSearch || searchResult)" />
            <div class="row">
                <moviePoster  v-for="id in searchResult" :key="id" :movie-id="id" search="true"/>
            </div>
        </template>
<!--        <div v-if="searchResult !== null">-->
<!--            -->
<!--        </div>-->
    </div>
</template>

<script>
    import moviePoster from "../components/moviePoster";
    import router from "../router";
    import loading from "../components/loading";
    export default {
        name: "SearchPage",
        components:{
            moviePoster,
            loading
        },
        data(){
            return{
                search: null,
                awaitingSearch: true,
                searchResult: null,
            }
        },
        methods:{
            searching () {
                if (this.awaitingSearch){
                    setTimeout(()=>{
                        fetch(`http://www.omdbapi.com/?apikey=af4546c0&s=${this.search}`)
                            .then(res => res.json())
                            .then(data => {
                                data =
                                    (data.Response === "True") ? Object.values(data)[0].map(movie => movie.imdbID) : false;
                                this.searchResult = data;
                            });
                        this.awaitingSearch = true;
                    }, 1000);
                    this.awaitingSearch = false;
                }
            },
            goBack(){
                router.back();
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/Sass/colorVarailbles";
    @import "src/assets/Sass/responsiveScales";
    div.main{
        min-height: 800px;
        padding-top: 120px;
        padding-bottom: 80px;
        input{
            background-color: honeydew;
            width: 80vw;
            margin-bottom: 120px;
            height: 50px;
            padding: 15px;
            box-sizing: border-box;
            border-radius: 5px;
            outline: none;
            font-size: 18px;
            color: slategrey;
            @media screen and (max-width: $tablet){
                width: 70vw;
                height: 35px;
            }
        }
        svg.go-back{
            height: 35px;
            fill: $blueHover;
            margin-left: 6.8vw;
            margin-right: 20px;
            cursor: pointer;
            transform: translateY(45%);
            transition: fill .3s ;
            @media screen and (max-width: $tablet) and (min-width: $mobile){
                margin-left: 10vw;
                margin-right: 10px;
            }
            @media screen and (max-width: $mobile){
                margin-left: 7vw;
                margin-right: 10px;
            }
            &:hover{
                fill: $red;
            }
        }
        svg.search{
            display: block;
            width: 150px;
            margin: 180px calc(50% - 95px);
        }
        div.row{
            display: flex;
            justify-content: center;
            flex-flow: wrap;
        }
    }
</style>
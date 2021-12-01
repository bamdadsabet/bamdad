<template>
  <div v-if="isLoading"  class="movie-container loading">
    <loading />
  </div>
  <div v-else class="movie-container">
    <movieInfo :data="movieInfo" :isLoading="isLoading" />
    <movieCast :data="{movieCast, accomplishments}" />
    <block-quote />
  </div>
</template>

<script>
// @ is an alias to /src
import {useRoute} from 'vue-router'
import movieInfo from "../components/movieInfo";
import movieCast from "../components/movieCast";
import blockQuote from "../components/blockquote";
import loading from "../components/loading";
export default {
name: 'MoviePage',
  components: {
    movieInfo,
    movieCast,
    blockQuote,
    loading
  },
  data(){
    return{
      movieInfo:{},
      movieCast:{},
      accomplishments:{},
      isLoading : true
    }
  },
  mounted() {
    const route = useRoute();
    this.isLoading = true;
    const imdbId = route.params.imdbId;
    fetch(`http://www.omdbapi.com/?apikey=af4546c0&i=${imdbId}&plot=full`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.movieInfo = {
          title: data?.Title,
          plot: data?.Plot,
          year: data?.Year,
          poster: data?.Poster,
          genres: data?.Genre.split(',').slice(0, 4),
          ratings:{
            imdb: data?.imdbRating,
            rottenTomatoes: data?.Ratings?.find(rating => rating.Source ==="Rotten Tomatoes")?.Value
          },
        };
        this.movieCast = {
          Actors: data.Actors !== 'N/A' &&  data?.Actors.split(',').slice(0 ,3),
          Directors:data.Director !== 'N/A' &&  data?.Director.split(',').slice(0, 3),
          Writers: data.Writer !== 'N/A' && data?.Writer.split(',').slice(0, 3)
        };
        this.accomplishments = {
          Awards: data.Awards !== 'N/A' && data?.Awards,
          BoxOffice: data.BoxOffice !== 'N/A' && data?.BoxOffice
        };
        this.isLoading = false;
      });

  }
}
</script>
<style scoped lang="scss">
  @import "src/assets/Sass/responsiveScales";
  div.movie-container{
    padding: 40px 5vw 80px 5vw;
    &.loading{
      height: 90vh;
    }
    @media screen and (max-width: $deskTop) and (min-width: $lapTop){
      padding-right: 3vw;
      padding-left: 3vw;
    }
    @media screen and (max-width: $lapTop) and (min-width: $mobile){
      padding-right: 3vw;
      padding-left: 3vw;
    }
    @media screen and (max-width: $mobile){
      padding-right: 2vw;
      padding-left: 2vw;
    }
  }
</style>

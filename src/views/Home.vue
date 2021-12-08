<template>
    <slider />
    <posterSlider title="Movie" :movie-ids="movieIds" />
    <posterSlider title="Series" :movie-ids="seriesIds"/>
    <posterSlider title="Anime" :movie-ids="animeIds"/>
    <hr>
    <theStory />
    <hr>
    <faqHolder />
    <hr>
</template>

<script>
// @ is an alias to /src
import posterSlider from "../components/Home/posterSlider";
import slider from "../components/Home/slider";
import theStory from "../components/Home/theStory";
import faqHolder from "../components/Home/faqHolder";
export default {
    name: 'Home',
    components: {
        slider,
        posterSlider,
        faqHolder,
        theStory,
    },
    data(){
        return {
            movieIds:['tt0068646', 'tt0062622', 'tt1444326', 'tt0415005', 'tt0468569', 'tt0110912', 'tt0338013', 'tt0113277', '"tt0029583', 'tt0362227', 'tt1499658', 'tt1596363', 'tt1431045', 'tt0119217', 'tt0106062', 'tt6854314', 'tt0361748', 'tt0325710', 'tt1213663', 'tt1065073', 'tt0172495', 'tt0122690', 'tt0368226'],
            seriesIds:['tt0903747', 'tt0460649', 'tt2575988', 'tt1190634', 'tt0431197', 'tt9140554', 'tt12078990', 'tt10919420', 'tt1797404', 'tt2442560', 'tt3032476', 'tt1632701', 'tt2306299', 'tt0411008', 'tt2861424', 'tt0141842', 'tt4052886', 'tt1865718', 'tt6741278', 'tt7366338', 'tt3398228', 'tt10986410'],
            animeIds:['tt0953422', 'tt7078180', 'tt1910272', 'tt11147852', 'tt1267295', 'tt6517102', 'tt4508902', 'tt5611026', 'tt10233448', 'tt2379308', 'tt0994314', 'tt11680468', 'tt1241317', 'tt6450560', 'tt6033368', 'tt12343534', 'tt0251439', 'tt0098063'],
        }
    }
}
</script>
<style scoped lang="scss">
    hr{
        background-color: #222222;
        height: 10px;
        border: #222222;
    }
</style>
